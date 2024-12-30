// Initialize variables for the character customization
let characterName = "";
let personality = "";
let appearance = "";
let priority = "";

// Personality buttons
const personalityButtons = document.querySelectorAll('.personality-button');
personalityButtons.forEach(button => {
  button.addEventListener('click', () => {
    personality = button.textContent;
    updateButtonSelection(personalityButtons, button);
  });
});

// Appearance buttons
const appearanceButtons = document.querySelectorAll('.appearance-button');
appearanceButtons.forEach(button => {
  button.addEventListener('click', () => {
    appearance = button.textContent;
    updateButtonSelection(appearanceButtons, button);
  });
});

// Priority buttons
const priorityButtons = document.querySelectorAll('.priority-button');
priorityButtons.forEach(button => {
  button.addEventListener('click', () => {
    priority = button.textContent;
    updateButtonSelection(priorityButtons, button);
  });
});

// Function to update button selection
function updateButtonSelection(buttonGroup, selectedButton) {
  buttonGroup.forEach(button => {
    if (button !== selectedButton) {
      button.style.backgroundColor = '#007BFF'; // Reset others
    }
  });
  selectedButton.style.backgroundColor = '#0056b3'; // Highlight selected
}

// Save button event listener
document.getElementById("save-character").addEventListener("click", () => {
  // Get the character name from the input field
  characterName = document.getElementById("name-input").value;
  
  // Check if all options are selected
  if (!characterName || !personality || !appearance || !priority) {
    alert("Please complete all fields!");
    return;
  }

  // Store the character data (you can later send it to a database or use in the game logic)
  localStorage.setItem('characterData', JSON.stringify({
    name: characterName,
    personality: personality,
    appearance: appearance,
    priority: priority
  }));

  // Redirect to the story page (or the next part of the game)
  window.location.href = "story.html"; // Redirect to the story page
});

// Back button event listener
document.getElementById("back-to-home").addEventListener("click", () => {
  window.location.href = "index.html"; // Redirect back to home page
});
