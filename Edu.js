// Array of jokes
const jokes = [
  "The only person who is educated is the one who has learned how to learn...and change.",
  "Education is not preparation for life; education is life itself.",
  "An investment in knowledge pays the best interest.",
  "Education is the foundation upon which we build our future." ,
  "The more I learn, the more I realize how much I don't know." ,
  "Education is not confined to books; true learning is through experience." ,
  "Learning is not attained by chance; it must be sought for with ardor and diligence." ,
  "Education is the most powerful weapon which you can use to change the world."
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
