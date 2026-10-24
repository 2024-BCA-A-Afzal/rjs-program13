import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '80px' }}>
      <h1>Welcome to React Practical 13!</h1>
      <p>My React application is running successfully.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
