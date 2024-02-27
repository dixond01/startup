function usersDisplay() {
    window.usersList = JSON.parse(localStorage.getItem('usersList'));
    const membersNumber = document.querySelector('#membersNumber');
    membersNumber.textContent = usersList.length;
};

function updateTable() {
    let tableElement = document.querySelector('#users');
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

usersDisplay();
updateTable();