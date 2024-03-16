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


    //implementing fetch
    const get_response = await fetch('/api/users');
    window.usersList = await get_response.json();

    // console.log('Type:', typeof(usersList), 'List:', usersList)

    // if (usersList.find(x => x.email === email)) {
    //   if (usersList.find(x => x.email === email).name === name) {
    //     usersList.find(x => x.email === email).status = "online";
    //   } else {
    //     const loginErrorEl = document.querySelector('#loginError');
    //     loginErrorEl.innerText = "Name associated with email incorrect.";
    //     return;
    //   }
    // } else {
    //   usersList.push({ email: email, name: nameEl.value, status: "online"});
    // } 

    localStorage.setItem('email', email); //hope this works with email = emailEl.value
    localStorage.setItem('userName', name);
    localStorage.setItem('studyName', studyName);

    
    // else {
    //   window.usersList = [{email: email, name: nameEl.value, status: "online"}];
    // }

    // console.log('Before Post type', typeof(usersList),'list: ', usersList);
    usersList = JSON.stringify(usersList);
    // console.log('After stringify type ', typeof(usersList),'list: ', usersList);

    
    const post_response = await fetch(`/api/user/${email}/${name}`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: usersList, //implemented like a GET. Problem?
    });

    if (post_response.status === 404) { //if change status code, also change this
      const loginErrorEl = document.querySelector('#loginError');
      loginErrorEl.innerText = "Name associated with email incorrect.";
      return;
    }

    //not sure if i need these two lines
    usersList = await post_response.json();
    localStorage.setItem('usersList', JSON.stringify(usersList));

    window.location.href = 'discussion.html';
 
  }