import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
            username,
            password,
          });
      
          if (response.data.token) {
            console.log('Login successful');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('first_name', response.data.first_name);
            localStorage.setItem('last_name', response.data.last_name);
            localStorage.setItem('id', response.data.id);
            navigate('/')
          } else {
            console.error('Login failed:', response.data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <div className="login-container">
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="User name / Email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="button login__submit" type="submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
