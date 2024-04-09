import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export function Login({ isLoggedIn, setIsLoggedIn }) {

  const navigate = useNavigate();
  
  const goToDiscussionPage = () => {
    navigate('/discussion');
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'email') setEmail(value);
    else if(name === 'name') setName(value);
    else if(name === 'password') setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.match(emailRegex)) {
      setEmailError("Please enter a valid email.");
      return;
    } else {
      setEmailError(''); // Clear any previous error
    }

    try {
      const post_response = await fetch(`/api/user/${email}/${name}/online`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password}),
      });

      if (post_response.ok) {
        const responseData = await post_response.json();
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('userName', name);
        sessionStorage.setItem('token', responseData.token);
        // window.location.href = 'discussion.html';
        setIsLoggedIn(true);
        goToDiscussionPage();
      } else {
        const body = await post_response.json();
        setLoginError(`Error: ${body.msg}`);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <main id='loginPage'>
      <h2 className="pageTitle">Login:</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input htmlFor="email" id="email" placeholder="Your email here" name="email" value={email} onChange={handleChange}/>
                <div id="emailError" className="errorMessage"></div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your name here" name="name" value={name} onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Your password here" name="password" value={password} onChange={handleChange}/>
                {/* <div id="loginError" className="errorMessage"></div> */}
                {loginError && <div id="loginError" className="errorMessage">{loginError}</div>}
                <button className="btn btn-primary rounded-pill px-3" type="submit">Login</button>
              </form>
              <div id="createstudy"><h2 id="or">Or</h2>
                <button className="btn btn-primary rounded-pill px-3" id="registerbtn" onClick="window.location.href='register.html';">Register</button>
              </div>
    </main>
  );
}