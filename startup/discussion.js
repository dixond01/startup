

function displayMessage(chat) {
    const discussionFeed = document.getElementById('discussionFeed');
    
    const chatEl = document.createElement('div');
    discussionFeed.appendChild(chatEl);

    //add RegEx for finding the verses
    scripturePattern = /(\d*)\s*([a-z]+)\s*(\d+)(?::(\d+))?(\s*-\s*(\d+)(?:\s*([a-z]+)\s*(\d+))?(?::(\d+))?)?/i;

    const nameEl = document.createElement('span');
    nameEl.classList.add('userName');
    nameEl.textContent = `${chat['name']}: `;
    chatEl.appendChild(nameEl);

    //add onclick
    const noHTML = chat['message'].replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "");
    const message = noHTML.replace(scripturePattern, "<span class='scriptureReference' onclick='showSidebar()'>$&<span>");
    chatEl.innerHTML = chatEl.innerHTML + message;
}

function displayMessages() {
    const discussionFeed = document.getElementById('discussionFeed');
    for (chat of messageList) {
        displayMessage(chat);

    }
}

//dont forget the on click for scriptures

function pushMessage() {
    const chatbox = document.getElementById("chatbox");
    const string = chatbox.value;
    if (string) {
        chatbox.value = "";
        const userName = localStorage.getItem("userName");
        const chat = {name: userName, message: string}
        messageList.push(chat);
        localStorage.setItem('messageList', JSON.stringify(messageList));
        displayMessage(chat);
    }
    else {
        //could give a message saying you must type a character? idk
        return;
    }

}

//webSocket simulation DELETE
setInterval(() => {
  chat = {name: 'Rachel', message: 'Helaman 5:12'};
  messageList.push(chat);
  localStorage.setItem('messageList', JSON.stringify(messageList));
  displayMessage(chat);
}, 7000);


function setDiscussion() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    

    if (localStorage.getItem('dateList')) {
        window.dateList = JSON.parse(localStorage.getItem('dateList'));
    }
    else {
        window.dateList = [];
    }

    function findTest(x) {
        if (x.month === currentMonth) {
            if (x.day === currentDay) {
                return true;
            }
        }
    }

    if (!dateList.find(findTest)) {
        //archive discussion
        //change to draw from database?
        if (localStorage.getItem('date')) {
            const archiveDate = JSON.parse(localStorage.getItem('date'));
            const archiveMonth = archiveDate.month;
            const archiveDay = archiveDate.day;
            localStorage.setItem(`${archiveMonth}${archiveDay}Discussion`, JSON.stringify({month: archiveMonth, day: archiveDay, messages: messageList}));
        }

        //clear discussion
        localStorage.removeItem('messageList');

        //add date to dateList
        dateList.push({month: currentMonth, day: currentDay});
        localStorage.setItem('dateList', JSON.stringify(dateList));

        
        
        
    }
    //update discussionName
    const discussionName = document.getElementById('discussionName');
    discussionName.appendChild(document.createTextNode(`${currentMonth} ${currentDay}`));

    //update date in localstorage
    localStorage.setItem('date', JSON.stringify({month: currentMonth, day: currentDay}));
}

function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('show');
}

//might break something
if (localStorage.getItem('messageList')) {
    window.messageList = JSON.parse(localStorage.getItem('messageList'));
}
else {
    window.messageList = [];
}

setDiscussion();

if (localStorage.getItem('messageList')) {
    window.messageList = JSON.parse(localStorage.getItem('messageList'));
}
else {
    window.messageList = [];
}

displayMessages();

