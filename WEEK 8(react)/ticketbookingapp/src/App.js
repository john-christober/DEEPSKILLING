import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>

        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
