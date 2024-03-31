export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};

export const assessEmailStrength = (email) => {
    const isValid = validateEmail(email);

    const emailCriteria = isValid ? [] : [
        { message: 'Invalid email format', isValid: false },
    ];

    return {
        isValid,
        emailCriteria,
    };
};

export const assessPasswordStrength = (password) => {
    const patterns = [
        { regex: /.{8,}/, message: 'At least 8 characters', isValid: false },
        { regex: /[A-Z]/, message: 'At least one uppercase letter', isValid: false },
        { regex: /[0-9]/, message: 'At least one number', isValid: false },
        { regex: /[^A-Za-z0-9]/, message: 'At least one special character', isValid: false } 
    ];

    patterns.forEach(criterion => {
        criterion.isValid = criterion.regex.test(password);
    });

    const isStrong = patterns.every(criterion => criterion.isValid);

    return {
        strength: isStrong ? 'strong' : 'weak',
        passwordCriteria: patterns,
    };
};
