

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
        const userName = localStorage.getItem("userName");
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
        updateScroll();
    }
    else {
        return;
    }

}

//webSocket simulation DELETE
setInterval(async () => {
    //fetch
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    
    //fetch
    const get_response = await fetch(`/api/messages/${currentMonth}/${currentDay}`);
    let messageList = await get_response.json();

    chat = {name: 'Rachel', message: 'Helaman 5:12 (<-- click)'};
    messageList.push(chat);
    //fetch
    const post_response = await fetch('/api/message', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({date: {month: currentMonth, day: currentDay}, messageList: messageList})
      });     

    messageList = await post_response.json();

    displayMessage(chat);
}, 14000);

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


    // function findTest(x) {
    //     if (x.month == currentMonth) {
    //         if (x.day == currentDay) {
    //             return true;
    //         }
    //     }
    // }

    // let archiveDate = {};

    // //fetch
    // const get_response = await fetch('/api/dates');
    // let dateList = await get_response.json();

    // //if it's a new day (the date is not in the localstorage object array dateList) archive and refresh discussion
    // if (!dateList.find(findTest)) {
    //     //archive discussion

    //     //fetch
    //     const get_storedDate_res = await fetch('/api/stored_date');
    //     archiveDate = await get_storedDate_res.json();
                            
    //     if (archiveDate.length) {
    //         const archiveMonth = archiveDate.month;
    //         const archiveDay = archiveDate.day;
    //         const archiveObject = {month: archiveMonth, day: archiveDay, messages: messageList};

    //         //fetch
    //         const archive_response = await fetch('/api/archive_data');
    //         let archiveList = await archive_response.json();

    //         archiveList.push(archiveObject);

    //         //fetch
    //         archiveList = JSON.stringify(archiveList);
    //         const archive_post_response = await fetch('/api/archive_new_data', {
    //             method: 'POST',
    //             headers: {'content-type': 'application/json'},
    //             body: archiveList,
    //         });    

    //         archiveList = await archive_post_response.json();
    //     }

    //     //clear discussion
    //     messageList = [];

    //     //fetch
    //     const message_response = await fetch('/api/message', {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify({date: {month: currentMonth, day: currentDay}, messageList: messageList})
    //       });       

    //     messageList = await message_response.json();

    //     //add date to dateList
    //     // dateList.push({month: currentMonth, day: currentDay});

    //     // //fetch
    //     // dateList = JSON.stringify(dateList);
    //     // const post_response = await fetch('/api/date', {
    //     //     method: 'POST',
    //     //     headers: {'content-type': 'application/json'},
    //     //     body: dateList,
    //     //     });    

    //     // dateList = await post_response.json();
                
    // }
    //update discussionName
    // const discussionName = document.getElementById('discussionName');
    // discussionName.appendChild(document.createTextNode(`${currentMonth} ${currentDay}`));

    //fetch
    // archiveDate = {month: currentMonth, day: currentDay};
    // archiveDate = JSON.stringify(archiveDate);
    // const post_storeDate_response = await fetch('/api/store_date', {
    //     method: 'POST',
    //     headers: {'content-type': 'application/json'},
    //     body: archiveDate,
    //     });    

    // archiveDate = await post_storeDate_response.json();
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
setDiscussion();

displayMessages();

updateScroll();