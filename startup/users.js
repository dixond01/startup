function usersDisplay() {
    window.usersList = JSON.parse(localStorage.getItem('usersList'));
    const membersNumber = document.querySelector('#membersNumber');
    membersNumber.textContent = usersList.length;
};

usersDisplay();