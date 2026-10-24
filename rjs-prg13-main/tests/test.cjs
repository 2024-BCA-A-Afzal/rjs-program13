
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

test('displays feedback form', () => {
  render(<App />);
  expect(screen.getByText('Student Feedback Form')).toBeInTheDocument();
});

test('validates empty name', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Please enter your name')).toBeInTheDocument();
});

test('validates empty email', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/student name/i), {
    target: { value: 'Afzal' }
  });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Please enter your email')).toBeInTheDocument();
});

test('validates invalid email', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/student name/i), {
    target: { value: 'Afzal' }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'afzalexample.com' }
  });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
});

test('validates empty feedback', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/student name/i), {
    target: { value: 'Afzal' }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'afzal@example.com' }
  });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Please enter your feedback')).toBeInTheDocument();
});

test('submits valid feedback', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/student name/i), {
    target: { value: 'Afzal' }
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'afzal@example.com' }
  });
  fireEvent.change(screen.getByLabelText(/feedback/i), {
    target: { value: 'Good practical session' }
  });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Feedback submitted successfully!')).toBeInTheDocument();
});
