if (localStorage.getItem('messageList')) {
    window.messageList = JSON.parse(localStorage.getItem('messageList'));
}
else {
    window.messageList = [];
}

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

    const discussionName = document.getElementById('discussionName');
    discussionName.appendChild(document.createTextNode(`${currentMonth} ${currentDay}`));
}

displayMessages();
setDiscussion();

//need to create and display the array 
//need to add daily chat refresh with heading change