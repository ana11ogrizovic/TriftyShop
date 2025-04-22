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
  const [globalError, setGlobalError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
  
      if (response.data) {
        const { token, email, userId, userName } = response.data;
  
        onLogin({
          token,
          email,
          userId,
          userName
        });
  
        navigate('/'); // ili gde god želiš
      }
  
    } catch (error) {
      console.error('Login error:', error);
      alert('Pogrešan email ili lozinka');
    }
  };
  

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

      const { token, user } = response.data;

      if (user) {
        // Spremi podatke u localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('email', user.email);  // Spremi email u localStorage
        localStorage.setItem('userId', user._id);

        // Poziv na onLogin, ako trebaš da ažuriraš stanje u roditeljskoj komponenti
        if (onLogin) {
          onLogin({
            token,
            email: user.email,
            userId: user._id,
            userName: user.userName, // ili kako god ti backend vraća
          });
        }
          // Pozivanje callback funkcije za roditeljsku komponentu

        // Navigacija na korisnički panel
        navigate('/userpanel');
      } else {
        setGlobalError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setGlobalError('Login failed. Please try again.');
    }
    setLoading(false);
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
        {globalError && <div className="error-message">{globalError}</div>}
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
