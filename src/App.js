import React, { useState } from 'react';
import logo from './images/lawod.png';
import google from './images/google.png';
import './App.css';
import { useFormInput } from './useform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const email = useFormInput('');
  const password = useFormInput('', true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.isValid && password.strength === 'strong') {
      console.log('Submitted:', { email: email.value, password: password.value });
    } else {
      console.log('Invalid submission');
    }
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
              <input type="text" placeholder="Email address" {...email.bind} />
              {email.showEmailPopup && email.emailCriteria && (
                <div className="email-popup">
                  <ul>
                    {email.emailCriteria.map(criteria => (
                      <li key={criteria.message} className={criteria.isValid ? 'valid' : 'invalid'}>
                        {criteria.isValid ? '✔' : '✖'} {criteria.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} placeholder="Password" {...password.bind} />
              <button type="button" onClick={toggleShowPassword} className="toggle-password">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {password.showPasswordPopup && (
              <div className="password-popup">
                <ul>
                  {password.passwordCriteria.map(criteria => (
                    <li key={criteria.message} className={criteria.isValid ? 'valid' : 'invalid'}>
                      {criteria.isValid ? '✔' : '✖'} {criteria.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button type="submit" className="login-button">Continue</button>
            <div className="form-footer">
              <div className="signup-link">
                Don't have an account? <a href="#">Create account</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
