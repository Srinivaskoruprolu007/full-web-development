document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Berlin", "Rome", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Mark Twain",
        "Charles Dickens",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the boiling point of water at sea level?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      answer: "100°C",
    },
  ];

  let quizContainer = document.getElementById("quiz-container");
  let questionContainer = document.getElementById("question-container");
  let questionTextDisplay = document.getElementById("question-text");
  let choicesListDisplay = document.getElementById("choices-list");
  let nextButton = document.getElementById("next-btn");
  let resultContainer = document.getElementById("result-container");
  let scoreDisplay = document.getElementById("score");
  let restartButton = document.getElementById("restart-btn");
  let startButton = document.getElementById("start-btn");

  let score = 0;
  let currentQuestionIndex = 0;

  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    score = 0;
    currentQuestionIndex = 0;
    renderQuestions();
  }

  function renderQuestions() {
    nextButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    const { question, choices } = questions[currentQuestionIndex];
    choicesListDisplay.innerHTML = "";
    questionTextDisplay.textContent = question;

    choices.forEach((choice) => {
      let li = document.createElement("li");
      li.innerText = choice;
      li.classList.add(
        "bg-gray-700",
        "text-white",
        "font-medium",
        "text-lg",
        "py-3",
        "px-4",
        "rounded-md",
        "w-full",
        "text-center",
        "hover:bg-blue-500",
        "hover:scale-105",
        "cursor-pointer",
        "transition-all"
      );
      li.addEventListener("click", () => selectAnswer(choice, li));
      choicesListDisplay.append(li);
    });
  }

  function selectAnswer(choice, li) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    li.classList.add("bg-blue-500");

    nextButton.classList.remove("hidden");
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestions();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("flex");
    scoreDisplay.textContent = `${score} / ${questions.length}`;
    nextButton.classList.add("hidden");
  }

  function restartQuiz() {
    resultContainer.classList.add("hidden");
    startQuiz();
  }
});
