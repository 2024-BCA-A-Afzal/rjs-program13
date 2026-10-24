
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Please enter your name');
      return;
    }

    if (!email.trim()) {
      setMessage('Please enter your email');
      return;
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email');
      return;
    }

    if (!feedback.trim()) {
      setMessage('Please enter your feedback');
      return;
    }

    setMessage('Feedback submitted successfully!');
  };

  return (
    <div style={{
      maxWidth: '450px',
      margin: '40px auto',
      padding: '25px',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '10px'
    }}>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 16px' }}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 16px' }}
        />

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          style={{ display: 'block', width: '95%', padding: '10px', margin: '8px 0 16px' }}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p role="alert">{message}</p>}
    </div>
  );
}

export default App;
