async function usersDisplay() {
    const get_response = await fetch('/api/users');
    window.usersList = await get_response.json();
    console.log("Type: ", typeof(usersList), "List: ", usersList);
    //window.usersList = JSON.parse(sessionStorage.getItem('usersList'));
    const membersNumber = document.querySelector('#membersNumber');
    membersNumber.textContent = usersList.length;
};

async function updateTable() {
    let tableElement = document.querySelector('#users');

    const get_response = await fetch('/api/users');
    window.usersList = await get_response.json();
    
    for (user of usersList) {
        const rowElement = document.createElement("tr");
        tableElement.appendChild(rowElement);

        const userElement = document.createElement("td");
        userElement.textContent = user['name']
        rowElement.appendChild(userElement);
        const statusElement = document.createElement("td");
        const spanElement = document.createElement("span");
        const dotContent = document.createTextNode("●")
        spanElement.appendChild(dotContent);
        spanElement.classList.add(user['status']);
        statusElement.appendChild(spanElement);
        
        rowElement.appendChild(statusElement);
    }
}

const token = sessionStorage.getItem('token'); // Assume you have the token available here
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws?token=${encodeURIComponent(token)}`);
window.addEventListener('beforeunload', function(event) {
    socket.close();
  });
  socket.onmessage = async (event) => {
    //get connections to update their messages
    //call displayMessage(chat) (i think.)
    let msg = {};
    if (event.data instanceof Blob) {
        const text = await event.data.text();
        msg = JSON.parse(text);
    } else {
        msg = JSON.parse(await event.data);
    }
    // const msg = JSON.parse(await event.data);
    if (msg.type == 'status' && msg.value == 'online'){
        usersDisplay();
        updateTable();
    }
    
};
