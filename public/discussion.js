

function displayMessage(chat) {
    const discussionFeed = document.getElementById('discussionFeed');
    
    const chatEl = document.createElement('div');
    discussionFeed.appendChild(chatEl);

    const nameEl = document.createElement('span');
    nameEl.classList.add('userName');
    nameEl.textContent = `${chat['name']}: `;
    chatEl.appendChild(nameEl);

    const noHTML = chat['message'].replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "");
    //RegEx for finding the verses
    scripturePattern = /(?:(\d [a-z]+)|([a-z]+))\ (\d+):(\d+)(?:\ ?-\ ?(\d+))?/i;   
    
    const message = noHTML.replace(scripturePattern, "<span class='scriptureReference' onclick='showSidebar(this)'>$&</span>");
    chatEl.innerHTML = chatEl.innerHTML + message;
}

async function displayMessages() {

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    
    //fetch
    const get_response = await fetch(`/api/messages/${currentMonth}/${currentDay}`);
    let messageList = await get_response.json();

    const discussionFeed = document.getElementById('discussionFeed');
    for (chat of messageList) {
        displayMessage(chat);

    }
}

async function pushMessage() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    
    //fetch
    const get_response = await fetch(`/api/messages/${currentMonth}/${currentDay}`);
    let messageList = await get_response.json();

    const chatbox = document.getElementById("chatbox");
    const string = chatbox.value;
    if (string) {
        chatbox.value = "";
        const userName = sessionStorage.getItem("userName");
        const chat = {name: userName, message: string}
        messageList.push(chat);

        //fetch
        const post_response = await fetch('/api/message', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date: {month: currentMonth, day: currentDay}, messageList: messageList})
          });    

        messageList = await post_response.json();

        displayMessage(chat);
        socket.send(JSON.stringify(chat));
        updateScroll();
    }
    else {
        return;
    }

}

async function setDiscussion() {
    
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const discussionName = document.getElementById('discussionName');
    discussionName.appendChild(document.createTextNode(`${currentMonth} ${currentDay}`));
    
    
    //fetch
    let messageList = []
    const message_response = await fetch(`/api/messages/${currentMonth}/${currentDay}`);
    if (message_response.headers.get('content-type')?.includes('application/json')) {
        messageList = await message_response.json();
        // Process jsonData
      } else {
        // Handle other content types
        messageList = null;
      }
    //let messageList = await message_response.json();   
    if (messageList == null) {
        const new_message_response = await fetch('/api/message', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date: {month: currentMonth, day: currentDay}, messageList: []})
          });  
    }
}


function updateScroll(){
    var discussionFeedEl = document.getElementById("discussionFeed");
    discussionFeedEl.scrollTop = discussionFeedEl.scrollHeight;
}

async function showSidebar(element) {
    const sidebarEl = document.getElementById('sidebar');

    const referenceText = element.textContent;
    const referenceEl = document.getElementById('reference');
    referenceEl.textContent = referenceText;

    //match and group scriptureReference
    scripturePattern = /(?:(\d [a-z]+)|([a-z]+))\ (\d+):(\d+)(?:\ ?-\ ?(\d+))?/i;
    if (element.textContent.match(scripturePattern)) {
        const match = element.textContent.match(scripturePattern);
        if (match[1]) {
            window.book = match[1];
        }
        else {
            window.book = match[2];
        }
        window.chapter = match[3];
        window.verses = [match[4]]; 
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
            let scriptureText = await getScripture(book, chapter, verse);
            textEl.textContent = scriptureText; //gives the book, chapter, and specific verse to the getScripture function which returns the text of the verse.
            verseEl.appendChild(textEl);
        }
    }

    sidebarEl.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('show');
}

async function getScripture(book, chapter, verse) { //may conflict with window variables?
    book = book.toLowerCase()
    if (book === "1 nephi") {
        book = "1nephi";
    } else if (book === "2 nephi") {
        book = "2nephi";
    } else if (book === "words of mormon") {
        book = "wordsofmormon";
    } else if (book === "3 nephi") {
        book = "3nephi";
    } else if (book === "4 nephi") {
        book = "4nephi";
    }
    let bookOfMormon = ["1nephi", "2nephi","jacob","enos","jarom","omni","wordsofmormon","mosiah","alma","helaman","3nephi","4nephi","mormon","ether","moroni"];
    if (bookOfMormon.includes(book)) {
        try {
            response = await fetch(`https://book-of-mormon-api.vercel.app/${book}/${chapter}/${verse}`);
            let resText = await response.text();
            let resObj = JSON.parse(resText);
            let text = resObj.text;
            return text
        } catch(err) {
            return "We do not support this reference right now. Sorry! (Currently, we only offer support for the KJV Bible and the Book of Mormon.)";
        }
        
            
    } else {
        try{
            //FETCH from bible
            response = await fetch(`https://bible-api.com/${book} ${chapter}:${verse}?translation=kjv`);
            if (response.status < 400) {
                let resText = await response.text();
                let resObj = JSON.parse(resText);
                let text = resObj.text;
                return text;
            } else {
                return "We do not support this reference right now. Sorry! (Currently, we only offer support for the KJV Bible and the Book of Mormon.)";
            } 
        } catch(err) {
            //return generic no support message
            return "We do not support this reference right now. Sorry! (Currently, we only offer support for the KJV Bible and the Book of Mormon.)";
        }
    }
}


const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onopen = (event) => {
    //get table to update (online)

};
socket.onclose = (event) => {
    //get table to update (offline)
};
socket.onmessage = async (event) => {
    //get connections to update their messages
    //call displayMessage(chat) (i think.)
    const chat = JSON.parse(await event.data.text());
    displayMessage(chat);
};

setDiscussion();

displayMessages();

updateScroll();

// Get the input field
var input = document.getElementById("chatbox");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("postBtn").click();
  }
}); 