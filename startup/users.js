function usersDisplay() {
    let usersList = [];
    const user = localStorage.getItem('userName');
    usersList.push(user);
    let count = 0;
    while (count < usersList.length) {
        count++;
    };
    const membersNumber = document.querySelector('#membersNumber');
    membersNumber.textContent = count;
};

usersDisplay();