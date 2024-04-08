import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='wrapper'>
        <div className='headerAndMain'>
            <header>
                <h1 class="websiteTitle">InspireUs</h1>
            </header>

            <main>
                App components go here
            </main>
        </div>
        <footer>
            <div class="container-fluid">
            <span class="text-reset">Darbi Dixon</span>
            <a class="text-reset" href="https://github.com/dixond01/startup">GitHub</a>
            </div>
        </footer> 
    </div>
    );
}