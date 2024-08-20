import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupP = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [city, setCity] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
            username,
            email,
            first_name,
            last_name,
            type: 'patient',
            city,
            password,
          });
      
          if (response.status==201) {
            console.log('SignUp successful');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('first_name', response.data.first_name);
            localStorage.setItem('last_name', response.data.last_name);
            navigate('/');
          } else {
            console.error('Signup failed:', response.data.error);
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
                                    placeholder="User name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="email"
                                    className="login__input"
                                    placeholder="E-mail Id"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="First name"
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="last name"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
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
                                <span className="button__text">Register Now</span>
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

export default SignupP;
