// Array of jokes
const jokes = [
  "First, solve the problem. Then, write the code",
  "If you think math is hard, try web design." ,
  "Don't write better error messages; write code that doesn't need them.",
  "It's not a bug, it's an undocumented feature!",
  "So much complexity in software comes from trying to make one thing do two things.",
  "Of course bad code can be cleaned up. But it’s very expensive",
  "Repetition is the root of all software evil.",
  "Clean code always looks like it was written by someone who cares."
];

// Function to generate a random joke
function generateJoke() {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const jokeElement = document.getElementById("joke-text");
  jokeElement.textContent = jokes[randomNumber];
}

// Attach click event to the button
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateJoke);
