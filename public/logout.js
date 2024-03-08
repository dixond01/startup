async function logout() {
    userName = localStorage.getItem('userName');
    if (localStorage.getItem('usersList')) {
        window.usersList = JSON.parse(localStorage.getItem('usersList'));
        if (usersList.find(x => x.name === userName)) {
          usersList.find(x => x.name === userName).status = "offline";
        }
    } 

    usersList = JSON.stringify(usersList);
    const post_response = await fetch('/api/user', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: usersList,
    });

    localStorage.setItem('usersList', usersList);
    //make Post request
    window.location.href = 'index.html';
}