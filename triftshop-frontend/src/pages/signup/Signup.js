import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import './Signup.css'; // Stilovi
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const password = watch("password");

    const onSubmit = async (data) => {
        console.log(data); 
        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const result = await response.json();
            console.log(result.message);

            // Prikazuje uspešno obaveštenje
            toast.success('Korisnik uspešno registrovan! 🎉');

            // Preusmerenje nakon 2 sekunde
            setTimeout(() => navigate('/login'), 2000);

        } catch (error) {
            console.error('Error:', error);
            toast.error('Greška pri registraciji! ❌');
        }
    };

    return (
        <div className="container">
            <div className="sign-in-form">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('fullName', { 
                            required: 'Full Name is required',
                            pattern: { value: /^[A-Za-z\s]{2,}$/, message: 'Only letters and spaces, min 2 chars' }
                        })}
                        error={!!errors.fullName}
                        helperText={errors.fullName ? errors.fullName.message : ''}
                    />
                    <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { 
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                                message: 'Please enter a valid email' 
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: { 
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 
                                message: 'Must be at least 8 characters, include a letter and a number' 
                            }
                        })}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                    />
                    <TextField
                        label="Reenter Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('confirmPassword', {
                            required: 'Please confirm your password',
                            validate: (value) => value === password || 'Passwords do not match'
                        })}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                    />
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: '#F361AF', width: '170px', margin: '20px auto' }}
                    >
                        GET STARTED
                    </Button>
                    
                    {/* Toast Container za prikaz obaveštenja */}
                    <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
                </form>
            </div>
        </div>
    );
};

export default Signup;
