// Home Screen Section

// Initialize elements and variables
let loginButton, signupButton, helpButton, forgotPasswordButton;
let modal, closeHelpButton;
let signUpSection, loginSection, homeScreenSection;
let usernameInput, passwordInput, signupUsernameInput, signupPasswordInput, signupEmailInput;

// Function to initialize the home screen
function initializeHomeScreen() {
  homeScreenSection = document.getElementById("homeScreen");
  signUpSection = document.getElementById("signUpSection");
  loginSection = document.getElementById("loginSection");

  // Buttons for login and signup
  loginButton = document.getElementById("loginButton");
  signupButton = document.getElementById("signupButton");

  // Action for login button
  loginButton.addEventListener("click", showLoginSection);

  // Action for sign-up button
  signupButton.addEventListener("click", showSignUpSection);

  // Forgot password button
  forgotPasswordButton = document.getElementById("forgotPasswordButton");
  forgotPasswordButton.addEventListener("click", showForgotPasswordScreen);

  // Help button with a popup modal
  helpButton = document.getElementById("helpButton");
  helpButton.addEventListener("click", showHelpModal);

  // Initialize modal and close button for help
  modal = document.getElementById("helpModal");
  closeHelpButton = document.getElementById("closeHelpButton");
  closeHelpButton.addEventListener("click", closeHelpModal);
}

// Show the login section and hide the home screen
function showLoginSection() {
  homeScreenSection.style.display = "none";
  loginSection.style.display = "block";
}

// Show the sign-up section and hide the home screen
function showSignUpSection() {
  homeScreenSection.style.display = "none";
  signUpSection.style.display = "block";
}

// Show the forgot password screen
function showForgotPasswordScreen() {
  alert("Password reset instructions will be sent to your email.");
}

// Show help modal with more app info
function showHelpModal() {
  modal.style.display = "block";
}

// Close the help modal
function closeHelpModal() {
  modal.style.display = "none";
}

// Initialize the login form interaction
function initializeLoginForm() {
  usernameInput = document.getElementById("usernameInput");
  passwordInput = document.getElementById("passwordInput");

  // Add login functionality (dummy example)
  document.getElementById("loginSubmitButton").addEventListener("click", function() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple check (you can add backend verification here)
    if (username === "testuser" && password === "password123") {
      alert("Login successful!");
      // Redirect to the main app page
      window.location.href = "mainPage.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
}

// Initialize the sign-up form interaction
function initializeSignUpForm() {
  signupUsernameInput = document.getElementById("signupUsernameInput");
  signupPasswordInput = document.getElementById("signupPasswordInput");
  signupEmailInput = document.getElementById("signupEmailInput");

  // Add sign-up functionality (dummy example)
  document.getElementById("signUpSubmitButton").addEventListener("click", function() {
    const username = signupUsernameInput.value;
    const password = signupPasswordInput.value;
    const email = signupEmailInput.value;

    if (username && password && email) {
      alert("Sign-up successful! Please log in.");
      showLoginSection(); // Switch to login screen after sign-up
    } else {
      alert("Please fill all fields.");
    }
  });
}

// Call functions to initialize both login and signup forms
initializeHomeScreen();
initializeLoginForm();
initializeSignUpForm();

