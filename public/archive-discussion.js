function displayMessage(chat) {
    //UPDATE FROM DISCUSSION.JS

    
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


//window.messageList = await get_response.json();


//window.messageList = currentArchive.messages; //added window. to messageList. not sure if correct
//no messageList. need to replace with specific messageList
function displayMessages(messageList) {
    //DO NOT UPDATE FROM DISCUSSION.JS
    for (chat of messageList) {
        displayMessage(chat);
    }
}

function showSidebar(element) {
    //UPDATE FROM DISCUSSION.JS


    const sidebarEl = document.getElementById('sidebar');

    //need to update sidebar to match the scriptureReference
    const referenceText = element.textContent;
    const referenceEl = document.getElementById('reference');
    referenceEl.textContent = referenceText;

    //match and group scriptureReference
    if (element.textContent.match(scripturePattern)) {
        const match = element.textContent.match(scripturePattern);
        if (match[1]) {
            window.book = match[1];
        }
        else {
            window.book = match[2];
        }
        window.chapter = match[3];
        window.verses = [match[4]]; //may not overwrite previous verses
        if (match[5]) {
            for (let i = parseInt(match[4])+1; i<=parseInt(match[5]);i++) {
                window.verses.push(`${i}`);
            }
        }

        //updating the #scriptures div
        const scripturesEl = document.getElementById("scriptures");
        scripturesEl.textContent = "";
        for (verse of verses) {
            const verseEl = document.createElement('div');
            verseEl.classList.add("scripture");
            scripturesEl.appendChild(verseEl);
            
            
            const numberEl = document.createElement('span');
            numberEl.classList.add("verseNumber");
            numberEl.innerText = verse + " ";
            verseEl.appendChild(numberEl);

            const textEl = document.createElement('span');
            //may want to add a class
            textEl.innerText = "This is placeholder text for the verse text from a database."
            verseEl.appendChild(textEl);
        }
    }

    sidebarEl.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('show');
}


function updateScroll(){
    var discussionFeedEl = document.getElementById("discussionFeed");
    discussionFeedEl.scrollTop = discussionFeedEl.scrollHeight;
}


const currentArchive = JSON.parse(localStorage.getItem('currentArchive'));
const month = currentArchive.month;
const day = currentArchive.day;

const discussionName = document.getElementById('discussionName');
discussionName.appendChild(document.createTextNode(`${currentArchive.month} ${currentArchive.day}`));

let messageList = [];
const get_response = fetch(`/api/messages/${month}/${day}`);
get_response.then(result => {
    return result.json(); // Returns a promise
}).then(data => {
    messageList = data; // Now data contains the parsed JSON
    console.log(messageList);
    displayMessages(messageList);
    updateScroll();
});
// displayMessages(messageList);

// updateScroll();