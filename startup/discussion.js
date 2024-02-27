

function displayMessage(chat) {
    const discussionFeed = document.getElementById('discussionFeed');
    
    const chatEl = document.createElement('div');
    discussionFeed.appendChild(chatEl);

    const nameEl = document.createElement('span');
    nameEl.classList.add('userName');
    const nameContent = document.createTextNode(`${chat['name']}: `);
    nameEl.appendChild(nameContent);
    chatEl.appendChild(nameEl);

    const chatContent = document.createTextNode(`${chat['message']}`);
    chatEl.appendChild(chatContent);
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

    // if (!dateList.find(x => {x.month === currentMonth && x.day === currentDay})) {
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


//need to create and display the array 
//need to add daily chat refresh with heading change