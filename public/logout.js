function logout() {
    userName = localStorage.getItem('userName');
    if (localStorage.getItem('usersList')) {
        window.usersList = JSON.parse(localStorage.getItem('usersList'));
        if (usersList.find(x => x.name === userName)) {
          usersList.find(x => x.name === userName).status = "offline";
        }
    }
    localStorage.setItem('usersList', JSON.stringify(usersList));
    window.location.href = 'index.html';
}