async function login() {
  //getting all the information
    const emailEl = document.querySelector('#email');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = "";
    if (emailEl.value.match(emailRegex)){ //may need to add email verification? via api?
      email = emailEl.value;
    } else {
      const emailErrorEl = document.getElementById('emailError');
      emailErrorEl.innerText = "Please enter a valid email."
      return;
    }
    localStorage.setItem('email', email); //hope this works with email = emailEl.value
    

    const nameEl = document.querySelector('#name');
    const name = nameEl.value; //hope it doesn't conflict with name property of usersList
    localStorage.setItem('userName', name);

    const passwordEl = document.querySelector('#password');
    const password = passwordEl.value;

    const studyNameEl = document.querySelector('#studyGroup');
    const studyName = studyNameEl.value;
    localStorage.setItem('studyName', studyName);


    //implementing fetch
    const get_response = await fetch('/api/users');
    window.usersList = JSON.parse(get_response.json());

    // if (localStorage.getItem('usersList')) {
    //   window.usersList = JSON.parse(localStorage.getItem('usersList'));
      if (usersList.find(x => x.email === email)) {
        if (usersList.find(x => x.email === email).name === name) {
          usersList.find(x => x.email === email).status = "online";
        } else {
          const loginErrorEl = document.querySelector('#loginError');
          loginErrorEl.innerText = "Name associated with email incorrect.";
          return;
        }
      } else {
        usersList.push({ email: email, name: nameEl.value, status: "online"});
      } 
    
    // else {
    //   window.usersList = [{email: email, name: nameEl.value, status: "online"}];
    // }

    
    const post_response = await fetch('/api/user', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(usersList),
    });

    usersList = await post_response.json();

    localStorage.setItem('usersList', JSON.stringify(usersList));

    window.location.href = 'discussion.html';
 
  }