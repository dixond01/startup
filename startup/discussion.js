if (localStorage.getItem('messageList')) {
    window.messageList = JSON.parse(localStorage.getItem('messageList'));
}
else {
    window.messageList = [];
}

function displayMessages() {
    
}

function pushMessage() {
    const chatbox = document.getElementById("chatbox");
    const string = chatbox.value;
    chatbox.value = "";
    const userName = localStorage.getItem("userName");
    messageList.push({name: userName, message: string});
    displayMessages();

}

//need to create and display the array 