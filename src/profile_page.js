import React from 'react';
import logo from './images/lawod.png'; 

const ProfilePage = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'johndoe@example.com'
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-logo">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </div>
                <div className="login-content">
                    <h3>Your Profile</h3>
                    <div className="profile-fields">
                        <div className="profile-field">
                            <label>First Name:</label>
                            <span>{user.firstName}</span>
                        </div>
                        <div className="profile-field">
                            <label>Last Name:</label>
                            <span>{user.lastName}</span>
                        </div>
                        <div className="profile-field">
                            <label>Username:</label>
                            <span>{user.username}</span>
                        </div>
                        <div className="profile-field">
                            <label>Email:</label>
                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
