
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '60px' }}>
      <h1>React Practical 13</h1>
      <p>Application is running successfully!</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
