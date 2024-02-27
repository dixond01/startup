

function displayMessage(chat) {
    const discussionFeed = document.getElementById('discussionFeed');
    
    const chatEl = document.createElement('div');
    discussionFeed.appendChild(chatEl);

    const nameEl = document.createElement('span');
    nameEl.classList.add('userName');
    nameEl.textContent = `${chat['name']}: `;
    chatEl.appendChild(nameEl);

    const noHTML = chat['message'].replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "");
    //add RegEx for finding the verses
    scripturePattern = /(?:(\d [a-z]+)|([a-z]+))\ (\d+):(\d+)(?:\ ?-\ ?(\d+))?/i;
    //save books, chapters, and verses to variables for use in a database later (global variables)
    
    
    const message = noHTML.replace(scripturePattern, "<span class='scriptureReference' onclick='showSidebar(this)'>$&</span>");
    chatEl.innerHTML = chatEl.innerHTML + message;
}

function displayMessages() {
    const discussionFeed = document.getElementById('discussionFeed');
    for (chat of messageList) {
        displayMessage(chat);

    }
}

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
// setInterval(() => {
//   chat = {name: 'Rachel', message: 'Helaman 5:12 (<-- click)'};
//   messageList.push(chat);
//   localStorage.setItem('messageList', JSON.stringify(messageList));
//   displayMessage(chat);
// }, 7000);

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

function showSidebar(element) {
    const sidebarEl = document.getElementById('sidebar');

    //need to update sidebar to match the scriptureReference
    const referenceText = element.textContent;
    const referenceEl = document.getElementById('reference');
    referenceEl.textContent = referenceText;

    if (element.textContent.match(scripturePattern)) {
        const match = element.textContent.match(scripturePattern);
        if (match[1]) {
            console.log("book: ", match[1]);
            window.book = match[1];
        }
        else {
            console.log("book: ", match[2]);
            window.book = match[2];
        }
        console.log("chapter: ", match[3]);
        window.chapter = match[3];
        console.log("first verse: ", match[4]);
        window.verses = [match[4]]; //may not overwrite previous verses
        if (match[5]) {
            console.log("last verse: ", match[5]);
            for (let i = parseInt(match[4])+1; i<=parseInt(match[5]);i++) {
                console.log("nextVerse: ", i);
                window.verses.push(`${i}`);
            }
        }
    }

    sidebarEl.classList.add('show');
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

