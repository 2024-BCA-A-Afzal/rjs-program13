
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'Arial' }}>
      <h1>React Practical 13</h1>
      <p>React application deployed successfully!</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
