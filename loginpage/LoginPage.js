// Select the toggle buttons and form container
const loginBtn = document.querySelector('.btn-1'); // Button for Sign In
const registerBtn = document.querySelector('.btn-2'); // Button for Sign Up
const formContainer = document.querySelector('.form-container');

// Add event listeners for the buttons
loginBtn.addEventListener('click', () => {
    // Add the class to show the login form and hide the register form
    formContainer.classList.add('login-active');
    formContainer.classList.remove('register-active');
        loginBtn.style.backgroundColor = "#21264D";
        registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    
        loginForm.style.left = "50%";
        registerForm.style.left = "-50%";
    
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
});

registerBtn.addEventListener('click', () => {
    // Add the class to show the register form and hide the login form
    formContainer.classList.add('register-active');
    formContainer.classList.remove('login-active');
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";;

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
});

