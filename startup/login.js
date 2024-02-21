function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    const studyNameEl = document.querySelector('#studyGroup');
    localStorage.setItem('studyName', studyNameEl.value);
    window.location.href = 'discussion.html';
    //moving windows may not work. works in debugger but not otherwise
  }