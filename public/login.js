function login() {
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


    if (localStorage.getItem('usersList')) {
      window.usersList = JSON.parse(localStorage.getItem('usersList'));
      //current implementation will not create two instances of the same name. Fix during authentication?
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
    } else {
      window.usersList = [{email: email, name: nameEl.value, status: "online"}];
    }
    
    localStorage.setItem('usersList', JSON.stringify(usersList));

    window.location.href = 'discussion.html';
 
  }