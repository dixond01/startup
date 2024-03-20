async function register() {
  const emailEl = document.querySelector('#email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = "";
    if (emailEl.value.match(emailRegex)){ //may need to add email verification? via api?
      email = emailEl.value.toLowerCase();
    } else {
      const emailErrorEl = document.getElementById('emailError');
      emailErrorEl.innerText = "Please enter a valid email."
      return;
    }
    const nameEl = document.querySelector('#name');
    const name = nameEl.value; //hope it doesn't conflict with name property of usersList

    const passwordEl = document.querySelector('#password');
    const password = passwordEl.value;


    const response = await fetch('/api/auth/create', {
      method: 'post',
      body: JSON.stringify({ email: email, name: name, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      window.location.href = 'index.html';
    } else {
      const body = await response.json();
      const loginErrorEl = document.querySelector('#loginError');
      loginErrorEl.innerText = `Error: ${body.msg}`;
      }
}

async function login() {
  //getting all the information
    const emailEl = document.querySelector('#email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = "";
    if (emailEl.value.match(emailRegex)){ //may need to add email verification? via api?
      email = emailEl.value.toLowerCase();
    } else {
      const emailErrorEl = document.getElementById('emailError');
      emailErrorEl.innerText = "Please enter a valid email."
      return;
    }
    

    const nameEl = document.querySelector('#name');
    const name = nameEl.value; //hope it doesn't conflict with name property of usersList

    const passwordEl = document.querySelector('#password');
    const password = passwordEl.value;

    const studyNameEl = document.querySelector('#studyGroup');
    const studyName = studyNameEl.value;
    
    const post_response = await fetch(`/api/user/${email}/${name}/online`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({password: password}),
      //body: usersList, //implemented like a GET. Problem?
    });

    if (post_response.ok) {
      window.location.href = 'discussion.html';
      localStorage.setItem('email', email); //hope this works with email = emailEl.value
      localStorage.setItem('userName', name);
      localStorage.setItem('studyName', studyName);
    } else {
      const body = await post_response.json();
      const loginErrorEl = document.querySelector('#loginError');
      loginErrorEl.innerText = `Error: ${body.msg}`;
      }
  }