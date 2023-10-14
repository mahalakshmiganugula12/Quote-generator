// Array of jokes
const jokes = [
  "In the garden of friendship, happiness grows.",
  "Friendship is the glue that holds life together." ,
  "Friendship is like a rainbow between two hearts.",
  "A single rose can be my garden... a single friend, my world.",
  "The only way to have a friend is to be one.",
  "A friend is someone who knows all about you and still loves you.",
  "A real friend is one who walks in when the rest of the world walks out." ,
  "Friendship is the only cement that will ever hold the world together."
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
