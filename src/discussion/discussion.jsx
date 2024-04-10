import React from 'react';
import './discussion.css';

export function Discussion() {
  return (
    <main id="discussionPage">
      <div id="discussion">
          <h1 className="pageTitle">Discussion: <span id="discussionName"></span></h1>
          <div id="discussionFeed">
              
          </div>
      <hr />
          <form method="get">
              <input type="text" id="chatbox" placeholder="Type here..." />
              <button type="button" id="postBtn" className="btn btn-primary rounded-pill px-3" onClick="pushMessage()">Post</button>
          </form>
      </div>

      <div id="sidebar">
          <div id="sideHead">
              <span id="reference">1 Nephi 1:12</span>
              <button type="button" title="closePanel" id="xButton" onClick="hideSidebar()"><img src="x-close-delete.svg" alt="x-icon"/></button>
          </div>
          <div id="scriptures">
          </div>
      </div>
    </main>
  );
}