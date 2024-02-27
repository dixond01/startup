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
    chatbox.value = "";
    const userName = localStorage.getItem("userName");
    const chat = {name: userName, message: string}
    messageList.push(chat);
    localStorage.setItem(JSON.stringify('messageList', messageList));
    displayMessages();

}

//need to create and display the array 
//need to add daily chat refresh with heading change