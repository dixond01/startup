import React from 'react';
import './index.css';

export function Login({ isLoggedIn, setIsLoggedIn }) {
  return (
    <main id='loginPage'>
      <h2 className="pageTitle">Login:</h2>
            <div className="form">
                <label HTMLFor="email">Email:</label>
                <input HTMLFor="email" id="email" placeholder="Your email here"/>
                <div id="emailError" className="errorMessage"></div>
                <label HTMLFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your name here" />
                <label HTMLFor="password">Password:</label>
                <input type="password" id="password" placeholder="Your password here" />
                <div id="loginError" className="errorMessage"></div>
                <button className="btn btn-primary rounded-pill px-3" onClick="login()">Login</button>
              </div>
              <div id="createstudy"><h2 id="or">Or</h2>
                <button className="btn btn-primary rounded-pill px-3" id="registerbtn" onClick="window.location.href='register.html';">Register</button>
              </div>
    </main>
  );
}