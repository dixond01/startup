import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export function Register() {

    const navigate = useNavigate();
  
    const goToLoginPage = () => {
        navigate('');
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
      const post_response = await fetch(`/api/auth/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({ email: {email}, name: {name}, password: {password} }),
      });

      if (post_response.ok) {
        goToLoginPage();
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
      <h2 className="pageTitle">Register:</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input htmlFor="email" id="email" placeholder="Your email here" name="email" value={email} onChange={handleChange}/>
                {/* <div id="emailError" className="errorMessage"></div> */}
                {loginError && <div id="emailError" className="errorMessage">{emailError}</div>}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your name here" name="name" value={name} onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Your password here" name="password" value={password} onChange={handleChange}/>
                {/* <div id="loginError" className="errorMessage"></div> */}
                {loginError && <div id="loginError" className="errorMessage">{loginError}</div>}
                <button className="btn btn-primary rounded-pill px-3" type="submit">Register</button>
                
              </form>
              <div>Some random stuff</div>
            {/* <div class="form">
                <label for="email">Email:</label>
                <input for="email" id="email" placeholder="Your email here"/>
                <div id="emailError" class="errorMessage"></div>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Your name here" />
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Your password here" />
                <div id="loginError" class="errorMessage"></div>
                <button class="btn btn-primary rounded-pill px-3" onclick="register()">Register</button>
              </div> */}
    </main>
  );
}