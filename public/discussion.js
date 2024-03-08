

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

async function displayMessages() {

    //fetch
    const get_response = await fetch('/api/messages');
    let messageList = await get_response.json();

    const discussionFeed = document.getElementById('discussionFeed');
    for (chat of messageList) {
        displayMessage(chat);

    }
}

async function pushMessage() {
    //fetch
    const get_response = await fetch('/api/messages');
    let messageList = await get_response.json();

    const chatbox = document.getElementById("chatbox");
    const string = chatbox.value;
    if (string) {
        chatbox.value = "";
        const userName = localStorage.getItem("userName");
        const chat = {name: userName, message: string}
        messageList.push(chat);

        //fetch
        messageList = JSON.stringify(messageList);
        const post_response = await fetch('/api/message', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: messageList,
          });    

        messageList = await post_response.json();

        localStorage.setItem('messageList', JSON.stringify(messageList));
        displayMessage(chat);
        updateScroll();
    }
    else {
        //could give a message saying you must type a character? idk
        return;
    }

}

//webSocket simulation DELETE
setInterval(async () => {
    //fetch
    const get_response = await fetch('/api/messages');
    let messageList = await get_response.json();

    chat = {name: 'Rachel', message: 'Helaman 5:12 (<-- click)'};
    messageList.push(chat);
    //fetch
    messageList = JSON.stringify(messageList);
    const post_response = await fetch('/api/message', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: messageList,
        });    

    messageList = await post_response.json();

    localStorage.setItem('messageList', JSON.stringify(messageList));
    displayMessage(chat);
}, 7000);

async function setDiscussion() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    

    // if (localStorage.getItem('dateList')) {
    //     window.dateList = JSON.parse(localStorage.getItem('dateList'));
    // }
    // else {
    //     window.dateList = [];
    // }

    //fetch
    const get_response = await fetch('/api/dates');
    let dateList = await get_response.json();

    //fetch
    const message_response = await fetch('/api/messages');
    let messageList = await message_response.json();   

    function findTest(x) {
        if (x.month === currentMonth) {
            if (x.day === currentDay) {
                return true;
            }
        }
    }

    //if it's a new day (the date is not in the localstorage object array dateList) archive and refresh discussion
    if (!dateList.find(findTest)) {
        //archive discussion
        //change to draw from database?
        if (localStorage.getItem('date')) { //make fetch?

                    

            const archiveDate = JSON.parse(localStorage.getItem('date'));
            const archiveMonth = archiveDate.month;
            const archiveDay = archiveDate.day;
            const archiveObject = {month: archiveMonth, day: archiveDay, messages: messageList};

            // if (localStorage.getItem('archiveList')) {
            //     window.archiveList = JSON.parse(localStorage.getItem('archiveList'));
            // }
            // else {
            //     window.archiveList = [];
            // }

            //fetch
            const archive_response = await fetch('/api/archive_data');
            let archiveList = await archive_response.json();


            archiveList.push(archiveObject);

            //fetch
            archiveList = JSON.stringify(archiveList);
            const archive_post_response = await fetch('/api/archive_new_data', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: archiveList,
            });    

            archiveList = await archive_post_response.json();

            localStorage.setItem('archiveList', JSON.stringify(archiveList));
        }

        //clear discussion
        localStorage.removeItem('messageList');
        messageList = [];
        //fetch
        messageList = JSON.stringify(messageList);
        const message_response = await fetch('/api/message', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: messageList,
          });    

        messageList = await message_response.json();



        //add date to dateList
        dateList.push({month: currentMonth, day: currentDay});

        //fetch
        dateList = JSON.stringify(dateList);
        const post_response = await fetch('/api/date', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: dateList,
            });    

        dateList = await post_response.json();
        
        localStorage.setItem('dateList', JSON.stringify(dateList));
        
    }
    //update discussionName
    const discussionName = document.getElementById('discussionName');
    discussionName.appendChild(document.createTextNode(`${currentMonth} ${currentDay}`));

    //update date in localstorage
    localStorage.setItem('date', JSON.stringify({month: currentMonth, day: currentDay}));
}


function updateScroll(){
    var discussionFeedEl = document.getElementById("discussionFeed");
    discussionFeedEl.scrollTop = discussionFeedEl.scrollHeight;
}

function showSidebar(element) {
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

//might break something
// if (localStorage.getItem('messageList')) {
//     window.messageList = JSON.parse(localStorage.getItem('messageList'));
// }
// else {
//     window.messageList = [];
// }

setDiscussion();

// if (localStorage.getItem('messageList')) {
//     window.messageList = JSON.parse(localStorage.getItem('messageList'));
// }
// else {
//     window.messageList = [];
// }

displayMessages();

updateScroll();

