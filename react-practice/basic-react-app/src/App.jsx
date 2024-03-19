import { useState } from 'react';
import jwt from 'jsonwebtoken';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function App() {
  const [decodedToken, setDecodedToken] = useState(null);

  // Verify the token
  const verifyToken = () => {
    try {
      // Replace 'secret' with your actual secret key used for signing JWTs
      const decoded = jwt.verify(token, 'secret');
      console.log(decoded);
      setDecodedToken(decoded);
    } catch (error) {
      console.error('Invalid token:', error.message);
    }
  };

  return (
    <>
      <button onClick={verifyToken}>Verify Token</button>
      {decodedToken && (
        <div>
          Your json web token is: {JSON.stringify(decodedToken)}
        </div>
      )}
    </>
  );
}

export default App;
