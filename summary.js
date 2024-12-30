// Simulate story performance data
const storyPerformance = {
    integrity: "Good",
    empathy: "Excellent",
    decisionMaking: "Needs Improvement",
    overallFeedback: "You did great, but you can work on your decision-making."
  };
  
  // Function to display the performance scores and feedback
  function displayPerformance() {
    document.getElementById("integrity-score").textContent = `Integrity: ${storyPerformance.integrity}`;
    document.getElementById("empathy-score").textContent = `Empathy: ${storyPerformance.empathy}`;
    document.getElementById("decision-making-score").textContent = `Decision Making: ${storyPerformance.decisionMaking}`;
    document.getElementById("overall-feedback").textContent = `Overall Feedback: ${storyPerformance.overallFeedback}`;
  }
  
  // Handle Restart and Exit
  document.getElementById("restart-story").addEventListener("click", () => {
    window.location.href = "story.html"; // Redirect back to the story
  });
  
  document.getElementById("exit-story").addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the home page
  });
  
  // Initialize the Summary Page
  displayPerformance();
  