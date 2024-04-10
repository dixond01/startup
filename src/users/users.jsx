import React, { useState, useEffect } from 'react';
import './users.css';

export  function Users() { //async?
const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const usersList = await response.json();
            setUsers(usersList);
        };

        fetchUsers();
    }, []);

  return (
    <main id='usersPage'>
      <div id="imgTitle">
          <div id="studyGroupTitle">
              <h1 className="studyGroup">Users</h1>
              <h3 id="members">Members: <span id="membersNumber">{users.length}</span></h3>
          </div>
      </div>
      <hr />
      <table id="users">
            <tbody>
                <tr>
                  <th>User</th>
                  <th>Status</th>
                </tr>
                {users.map(user => (
                    <tr key={user.id}> 
                        <td>{user.name}</td>
                        <td>
                            <span className={user.status}>●</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      <br />
    </main>
  );
}