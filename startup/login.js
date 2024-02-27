function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    const studyNameEl = document.querySelector('#studyGroup');
    localStorage.setItem('studyName', studyNameEl.value);

    if (localStorage.getItem('usersList')) {
      window.usersList = JSON.parse(localStorage.getItem('usersList'));
      // for (user in usersList) {
      //   if (user['name'] === nameEl.value) {
      //     user['status'] = "online";
      //   }
      //   else {
      //     usersList.push({name: nameEl.value, status: "online"});
      //   }
      // }
      if (usersList.find(x => x.name === nameEl.value)) {
        usersList.find(x => x.name === nameEl.value).status = "online";
      }
      else {
        usersList.push({name: nameEl.value, status: "online"});
      }

    }
    else {
      window.usersList = [{name: nameEl.value, status: "online"}];
    }
//implement an array of objects with the keys 'name' and 'status' where 'status' is 'online' or 'offline'
    //updates usersList in localStorage (not sure if stringify in right place)
    localStorage.setItem('usersList', JSON.stringify(usersList));

    window.location.href = 'discussion.html';
    //moving windows may not work. works in debugger but not otherwise
  }