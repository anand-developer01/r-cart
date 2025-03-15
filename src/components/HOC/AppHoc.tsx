import React, { useEffect, useState } from 'react';
import { ReturnHOCInputCom } from './withAuth';
import './loginHoc.css';

// Define the User interface as described above
interface User       {
  id: number,
  name: string,
  email: string,
  role :string
}

function AppHoc() {
  const [users, setUsers] = useState<User[]>([]); // List of users
  const [songleUser, setSongleUser] = useState<User | null>(null); // Single selected user

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userRes = await fetch('http://localhost:8000/users');
        const data = await userRes.json();
        setUsers(data); // Set users list
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  const hendleSetUser = (userId: number) => {
    const singUser = users.find((us) => us.id === userId);
    setSongleUser(singUser || null); // Set single user or null if not found
  };

  return (
    <>
      <div className="main-cont">
        <div>
          <ul className="ul-list-box">
            {users.length > 0 &&
              users.map((e) => (
                <li key={e.id} onClick={() => hendleSetUser(e.id)}>
                  {e.name}
                </li>
              ))}
          </ul>
        </div>
        <div>
          {/* Pass songleUser prop to HOC, conditionally */}
          {songleUser ? (
            <ReturnHOCInputCom songleUser={songleUser} />
          ) : (
            <p>Please select a user</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AppHoc;
