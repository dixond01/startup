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

const currentArchive = JSON.parse(localStorage.getItem('currentArchive'));
messageList = currentArchive.messages;
//no messageList. need to replace with specific messageList
function displayMessages() {
    const discussionFeed = document.getElementById('discussionFeed');
    for (chat of messageList) {
        displayMessage(chat);

    }
}





displayMessages();