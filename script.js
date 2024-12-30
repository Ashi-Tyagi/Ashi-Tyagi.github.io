// Variables for sections
const homeScreen = document.getElementById("homeScreen");
const loginSection = document.getElementById("loginSection");
const signUpSection = document.getElementById("signUpSection");

// Buttons
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const forgotPasswordButton = document.getElementById("forgotPasswordButton");
const helpButton = document.getElementById("helpButton");
const backToHomeFromLogin = document.getElementById("backToHomeFromLogin");
const backToHomeFromSignUp = document.getElementById("backToHomeFromSignUp");

// Help Modal
const helpModal = document.getElementById("helpModal");
const closeHelpButton = document.getElementById("closeHelpButton");

// Functions for navigation
function showSection(section) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  section.classList.add("active");
}

loginButton.addEventListener("click", () => showSection(loginSection));
signupButton.addEventListener("click", () => showSection(signUpSection));
backToHomeFromLogin.addEventListener("click", () => showSection(homeScreen));
backToHomeFromSignUp.addEventListener("click", () => showSection(homeScreen));

// Forgot Password Alert
forgotPasswordButton.addEventListener("click", () => {
  alert("Password reset instructions will be sent to your email.");
});

// Help Modal
helpButton.addEventListener("click", () => {
  helpModal.classList.remove("hidden");
});

closeHelpButton.addEventListener("click", () => {
  helpModal.classList.add("hidden");
});

// Initialize Home Screen
showSection(homeScreen);


// Navigate back to the home page
document.getElementById('back-to-home').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  
  // Handle Login
  document.getElementById('login-button').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (username === 'testuser' && password === 'password123') {
      alert('Login successful!');
      window.location.href = 'story.html'; // Redirect to the story page
    } else {
      alert('Invalid username or password!');
    }
  });
  
  // Handle Sign-Up
  document.getElementById('signup-button').addEventListener('click', () => {
    const firstName = document.getElementById('signup-firstname').value;
    const lastName = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    if (firstName && lastName && email && username && password) {
      alert(`Welcome, ${firstName}! Your account has been created.`);
      window.location.href = 'story.html'; // Redirect to the story page
    } else {
      alert('Please fill out all fields to sign up.');
    }
  });
  

  // Story Intro Navigation
document.getElementById('start-customizing').addEventListener('click', () => {
    document.getElementById('story-intro').classList.add('hidden');
    document.getElementById('customization-section').classList.remove('hidden');
  });
  
  // Character Customization
  let selectedTraits = [];
  let selectedPriorities = [];
  
  // Handle Trait Selection
  document.querySelectorAll('.trait-button').forEach(button => {
    button.addEventListener('click', () => {
      const trait = button.getAttribute('data-trait');
      if (!selectedTraits.includes(trait)) {
        selectedTraits.push(trait);
        button.classList.add('selected');
      } else {
        selectedTraits = selectedTraits.filter(t => t !== trait);
        button.classList.remove('selected');
      }
      updateSummary();
    });
  });
  
  // Handle Priority Selection
  document.querySelectorAll('.priority-button').forEach(button => {
    button.addEventListener('click', () => {
      const priority = button.getAttribute('data-priority');
      if (!selectedPriorities.includes(priority)) {
        selectedPriorities.push(priority);
        button.classList.add('selected');
      } else {
        selectedPriorities = selectedPriorities.filter(p => p !== priority);
        button.classList.remove('selected');
      }
      updateSummary();
    });
  });
  
  // Update Summary
  function updateSummary() {
    const summaryText = document.getElementById('summary-text');
    summaryText.textContent = `Personality Traits: ${selectedTraits.join(', ') || 'None'} | Priorities: ${selectedPriorities.join(', ') || 'None'}`;
  }
  
  // Navigation Buttons
  document.getElementById('proceed-to-story').addEventListener('click', () => {
    alert(`Starting story with traits: ${selectedTraits.join(', ')} and priorities: ${selectedPriorities.join(', ')}`);
    window.location.href = 'story.html'; // Redirect to the main story page
  });
  
  document.getElementById('back-to-login').addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  

  // Story Data
const storySegments = [
    { text: "You wake up in a strange forest. What do you do?", choices: ["Explore", "Call for help", "Stay put"] },
    { text: "You encounter a mysterious figure. What do you ask?", choices: ["Who are you?", "Where am I?", "Can you help me?"] },
    { text: "The figure offers you a choice. Which path do you take?", choices: ["Left path", "Right path", "Stay with the figure"] }
  ];
  
  let currentSegment = 0;
  
  // Initialize Story
  function initializeStory() {
    updateStoryText(storySegments[currentSegment].text);
    updateChoices(storySegments[currentSegment].choices);
    updateProgress();
  }
  
  // Update Story Text
  function updateStoryText(text) {
    const storyText = document.getElementById("story-text");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    newParagraph.classList.add("user-response");
    storyText.appendChild(newParagraph);
  }
  
  // Update Choices
  function updateChoices(choices) {
    const choiceButtons = document.querySelectorAll(".choice-button");
    choiceButtons.forEach((button, index) => {
      if (choices[index]) {
        button.textContent = choices[index];
        button.style.display = "inline-block";
      } else {
        button.style.display = "none";
      }
    });
  }
  
  // Update Progress
  function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentSegment + 1) / storySegments.length) * 100;
    progressBar.style.width = `${progress}%`;
  }
  
  // Handle Choice Selection
  document.querySelectorAll(".choice-button").forEach(button => {
    button.addEventListener("click", (event) => {
      const choice = event.target.textContent;
      const storyText = document.getElementById("story-text");
  
      const appResponse = document.createElement("p");
      appResponse.classList.add("system-response");
      appResponse.textContent = `You chose: "${choice}"`;
      storyText.appendChild(appResponse);
  
      currentSegment++;
      if (currentSegment < storySegments.length) {
        updateStoryText(storySegments[currentSegment].text);
        updateChoices(storySegments[currentSegment].choices);
        updateProgress();
      } else {
        alert("You've reached the end of the story!");
        window.location.href = "summary.html"; // Redirect to summary page
      }
    });
  });
  
  // Navigation Buttons
  document.getElementById("restart-story").addEventListener("click", () => {
    currentSegment = 0;
    initializeStory();
  });
  
  document.getElementById("exit-story").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  
  // Start the Story
  initializeStory();
  