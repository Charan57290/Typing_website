const textToType = document.getElementById("textToType");
const typingInput = document.getElementById("typingInput");
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let timeLeft = 110;
let timerId = null;
let isRunning = false;

// A collection of words used to generate long typing text
const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "lazy",
  "dog",
  "programming",
  "technology",
  "computer",
  "software",
  "developer",
  "learning",
  "practice",
  "improve",
  "skills",
  "knowledge",
  "javascript",
  "react",
  "database",
  "application",
  "system",
  "future",
  "success",
  "experience",
  "project",
  "development",
  "understanding",
  "problem",
  "solution",
  "creative",
  "important",
  "continuous",
  "consistent",
  "discipline",
  "progress",
  "challenge",
  "build",
  "create",
  "design",
  "explore",
  "discover",
  "algorithm",
  "function",
  "variable",
  "object",
  "array",
  "network",
  "server",
  "client",
  "browser",
  "website",
  "practice",
  "focus",
  "effort",
  "patience",
  "improvement",
];

// Generate a very long text
function generateLongText() {
  const totalWords = 5000;

  const generatedWords = [];

  for (let i = 0; i < totalWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);

    generatedWords.push(words[randomIndex]);
  }

  return generatedWords.join(" ");
}

// Load new long text
function loadLongText() {
  const longText = generateLongText();

  textToType.textContent = longText;
}

// Update timer
function updateTimer() {
  timerDisplay.textContent = timeLeft;
}

// Start timer
function startTimer() {
  if (isRunning) {
    return;
  }

  isRunning = true;

  statusDisplay.textContent = "Running";

  timerId = setInterval(() => {
    timeLeft--;

    updateTimer();

    if (timeLeft <= 0) {
      restartTest();
    }
  }, 1000);
}

// Restart test
function restartTest() {
  clearInterval(timerId);

  timerId = null;

  isRunning = false;

  // Reset timer
  timeLeft = 110;

  updateTimer();

  // Clear input
  typingInput.value = "";

  // Generate completely new long text
  loadLongText();

  // Update status
  statusDisplay.textContent = "Ready";

  typingInput.focus();
}

// Start timer when typing begins
typingInput.addEventListener("input", function () {
  startTimer();
});

// Restart button
restartBtn.addEventListener("click", function () {
  restartTest();
});

// Initial setup
loadLongText();

updateTimer();
