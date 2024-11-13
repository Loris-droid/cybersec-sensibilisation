function checkPasswordStrength(password) {
    let strength = 0;
    
    // Vérification de la longueur minimale
    if (password.length >= 8) strength += 1;
    
    // Vérification de la présence de majuscules
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Vérification de la présence de minuscules
    if (/[a-z]/.test(password)) strength += 1;
    
    // Vérification de la présence de chiffres
    if (/\d/.test(password)) strength += 1;
    
    // Vérification de la présence de caractères spéciaux
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    
    return strength;
}