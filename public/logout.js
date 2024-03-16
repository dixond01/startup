async function logout() {
    userName = localStorage.getItem('userName');
    email = localStorage.getItem('email');

    //usersList = JSON.stringify(usersList);

    const post_response = await fetch(`/api/user/${email}/${userName}/offline`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      // body: usersList,
    });

    //localStorage.setItem('usersList', usersList);
    //make Post request
    window.location.href = 'index.html';
}