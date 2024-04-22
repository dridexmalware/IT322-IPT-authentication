import React from 'react';
import { useFormInput } from './useform';
import logo from './images/lawod.png';
import google from './images/google.png';
import './App.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('', true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration Submitted:', {
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </div>
        <div className="login-content">
          <h3>Try our digital fishing companion today!</h3>
          <button className="google-login">
            <img src={google} alt="Google" className="google-logo" />
            Continue with Google
          </button>
          <div className="divider">or</div>
          <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder="First Name" {...firstName.bind} />
            <input type="text" placeholder="Last Name" {...lastName.bind} />
            <input type="text" placeholder="Username" {...username.bind} />
            <input type="email" placeholder="Email" {...email.bind} />
            <input type="password" placeholder="Password" {...password.bind} />
            </div>
            <button type="submit" className="login-button">Register</button>
          <div className="form-footer">
            <div className="signup-link">
              Already have an account? <Link to="/">Sign in</Link>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
