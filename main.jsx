
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Please enter your name');
    } else if (!email.trim()) {
      setMessage('Please enter your email');
    } else if (!email.includes('@')) {
      setMessage('Please enter a valid email');
    } else if (!feedback.trim()) {
      setMessage('Please enter your feedback');
    } else {
      setMessage('Feedback submitted successfully!');
    }
  }

  return (
    <div style={{ maxWidth: '450px', margin: '50px auto', padding: '25px', fontFamily: 'Arial', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 18px' }}
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 18px' }}
        />

        <label>Feedback</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 18px' }}
        />

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {message && <p role="alert">{message}</p>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
