import React, { useState } from 'react';
import { TextField, Button, Link, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    setEmailError(false);
    setPasswordError(false);
    setLoading(true);

    // Validate inputs
    if (!email || !password || password.length < 8) {
      if (!email) setEmailError(true);
      if (!password || password.length < 8) setPasswordError(true);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      console.log('Server response:', response.data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token
        onLogin(email, response.data.userName); // Call the onLogin callback with the email and userName
        navigate('/userpanel'); // Navigate to user panel
      }

    } catch (error) {
      console.error('Error during login:', error);

      if (error.response) {
        console.log('Server error response:', error.response.data);
        alert(error.response.data.message || 'Login failed. Invalid credentials.');
      } else {
        alert('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FDF6FA',
        padding: '2rem',
        paddingTop: '5rem',
        paddingBottom: '6.5rem',
      }}
    >
      <form className="login-form">
        <TextField
          label="Your email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError && 'Field should not be empty'}
        />
        <TextField
          label="Your password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordError && (password.length < 8 ? 'Password must be at least 8 characters' : '')}
        />
        <Link href="/signup" className="link">
          Register if you don't have an account?
        </Link>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className="submit-button"
          onClick={handleLoginClick}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
        </Button>
      </form>
    </Box>
  );
}

export default Login;
