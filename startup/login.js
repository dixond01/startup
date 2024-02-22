function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    const studyNameEl = document.querySelector('#studyGroup');
    localStorage.setItem('studyName', studyNameEl.value);

    if (localStorage.getItem('usersList')) {
      let usersList = localStorage.getItem('usersList');
    }
    else {
      let usersList = [];
    }
//implement an array of objects with the keys 'name' and 'status' where 'status' is 'online' or 'offline'
    for (user in usersList) {
      if (user.name === nameEl.value) {
        user.status = online;
      }
      else {
        usersList.push({name: nameEl.value, statuus: online});
      }
    }

    window.location.href = 'discussion.html';
    //moving windows may not work. works in debugger but not otherwise
  }