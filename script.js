// Array of jokes
const jokes = [
  "In this world, fear has no place. Only strength respects strength.",
  "Everything is easy when you are busy. But nothing is easy when you are lazy.",
  "Take Risks in Your Life If you Win, U Can Lead! If You Lose, You can Guide!",
  "Teachers can open the door, but you must enter it yourself.",
  "The beautiful thing about learning is that no one can take it away from you.",
  "One Best Book is Equal To Hundred Good Friends But One Good Friend is Equal To A Library",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "The best way to predict your future is to create it."
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
