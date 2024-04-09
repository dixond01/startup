import React, {useState} from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx';
import { Register } from './login/register.jsx'
import { Archive } from './archive/archive.jsx';
import { Discussion } from './discussion/discussion.jsx';
import { Users } from './users/users.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <div id='app' className='body'>
            {isLoggedIn === false && (
            <header>
                <h1 className="websiteTitle">InspireUs</h1>
            </header>)
            }
            {isLoggedIn === true && (
            <header>
                <div id="header1stLine"><h1 className="websiteTitle">InspireUs</h1><button className="btn btn-primary rounded-pill px-3" id="logoutBtn" onclick="logout()">Logout</button></div>
                <nav className="pageNav">
                      <span><NavLink to="archive.html">Archive</NavLink></span>
                      <span><NavLink to="discussion.html">Home</NavLink></span>
                      <span><NavLink to="users.html">Users</NavLink></span>
                  </nav>
              </header>
            )}

        <Routes>
            <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} exact />
            <Route path='/archive' element={<Archive />} />
            <Route path='/discussion' element={<Discussion />} />
            <Route path='/users' element={<Users />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <div className="container-fluid">
            <span className="text-reset">Darbi Dixon</span>
            <a className="text-reset" href="https://github.com/dixond01/startup">GitHub</a>
            </div>
        </footer> 
    </div>
    </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }