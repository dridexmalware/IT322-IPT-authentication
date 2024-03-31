import { useState } from 'react';
import { validateEmail, assessPasswordStrength } from './utils';

export const useFormInput = (initialValue, isPassword) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(!isPassword);
    const [strength, setStrength] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPasswordPopup, setShowPasswordPopup] = useState(false);
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [passwordCriteria, setPasswordCriteria] = useState([]);
    const [emailCriteria, setEmailCriteria] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);

        if (isPassword) {
            const strengthResult = assessPasswordStrength(value);
            setStrength(strengthResult.strength);
            setPasswordCriteria(strengthResult.passwordCriteria);
            setIsValid(strengthResult.strength === 'strong');
            setErrorMessage(strengthResult.strength === 'strong' ? '' : 'Password is too weak.');
            setShowPasswordPopup(true);
            setShowEmailPopup(false);
        } else {
            const isValidEmail = validateEmail(value);
            setIsValid(isValidEmail);
            setEmailCriteria([{ message: isValidEmail ? 'Valid email format' : 'Invalid email format', isValid: isValidEmail }]);
            setErrorMessage(isValidEmail ? '' : 'Invalid email format');
            setShowEmailPopup(true);
            setShowPasswordPopup(false);
        }
    };

    const handleBlur = () => {
        setShowPasswordPopup(false);
        setShowEmailPopup(false);
    };

    const handleFocus = () => {
        if (isPassword && value) {
            setShowPasswordPopup(true);
        } else if (!isPassword && value) {
            setShowEmailPopup(true);
        }
    };

    return {
        value,
        setValue,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
        isValid,
        strength,
        errorMessage,
        showPasswordPopup,
        showEmailPopup,
        passwordCriteria,
        emailCriteria,
        bind: {
            value,
            onChange: handleChange,
            onBlur: handleBlur,
            onFocus: handleFocus,
            className: !isValid ? 'invalid' : 'valid'
        }
    };
};
