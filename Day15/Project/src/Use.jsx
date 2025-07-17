import React, { Suspense, use } from 'react';

const fetchData = fetch('https://dummyjson.com/users').then((res) => res.json());

const Use = () => {
  return (
    <div>
      <h3>Use API in React JS</h3>
      <Suspense fallback={<p>Loading...</p>}>
        <Users usersResponse={fetchData} />
      </Suspense>
    </div>
  );
};

const Users = ({ usersResponse }) => {
  const userData = use(usersResponse); 
  console.log(userData);

  return (
    <div>
      <h4>Users:</h4>
      <ul>
        {userData.users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Use;
