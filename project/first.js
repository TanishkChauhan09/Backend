// List of 20 questions
const allQuestions = [
    "What is your name?",
    "What is your favorite color?",
    "Where do you live?",
    "What is your favorite food?",
    "What is your hobby?",
    "What is the capital of France?",
    "Who is the current president of the USA?",
    "What is 5 + 3?",
    "What is your favorite movie?",
    "What is the largest planet in our solar system?",
    "Do you like coding?",
    "What is the tallest mountain in the world?",
    "How many continents are there?",
    "What is the fastest land animal?",
    "What is the speed of light?",
    "What is your favorite sport?",
    "Who wrote 'Romeo and Juliet'?",
    "Which country is famous for pizza?",
    "What is the boiling point of water?",
    "Who painted the Mona Lisa?"
];

// Function to get 5 random questions
function getRandomQuestions() {
    // Shuffle the array of questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    // Get the first 5 questions after shuffling
    const selectedQuestions = shuffled.slice(0, 5);

    return selectedQuestions;
}

// Function to display questions on the page
function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");
    // Clear previous questions
    questionsContainer.innerHTML = "";

    // Get 5 random questions
    const randomQuestions = getRandomQuestions();

    // Add each question as a div element
    randomQuestions.forEach(question => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.textContent = question;
        questionsContainer.appendChild(questionDiv);
    });
}

// Initial call to display questions
displayQuestions();

// Add event listener to the button
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", displayQuestions);
