const questionsArr = [
  {
    text: "What can loops offer JavaScript code as a whole?",
    answers: ["Improved performance.", "Cleaner syntax.", "Adding plug-ins.", "Cross-platform support"],
    correct: "Improved performance.",
  },
  {
    text: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answers: ["Arrays", "Variables", "Strings", "Function"],
    correct: "Strings",
  },
  {
    text: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
    answers: ["Scope", "JSON", "Output", "Syntax"],
    correct: "Syntax",
  },
  {
    text: "Where is the JavaScript placed inside an HTML document or page?",
    answers: ["In the <body> and <head> sections.", "In the <meta> section.", "In the <title> section.", "In the <footer> section."],
    correct: "In the <body> and <head> sections.",
  },
  {
    text: "What is considered to be the most popular programming language in the world?",
    answers: ["HTML", "Ruby", "Swift", "JavaScript"],
    correct: "JavaScript",
  },
];

let currentIndex = 0;

const start = document.querySelector("#start");
const questions = document.querySelector("#questions");
const buttoneOne = document.querySelector("#answerOne");
const buttoneTwo = document.querySelector("#answerTwo");
const buttoneThree = document.querySelector("#answerThree");
const buttoneFour = document.querySelector("#answerFour");
let results = document.querySelector("#result");
const containerOne = document.querySelector(".container-1");
const containertwo = document.querySelector(".container-2");
const containerThree = document.querySelector(".container-3");
const containerFour = document.querySelector(".container-4");
const answerButton = document.querySelector(".answerBtns");
let score = 0;
const submitButton = document.querySelector("#submit");
const highScoreButton = document.querySelector("#high-score");
const clearButton = document.querySelector("#clear");
const backHomeButton = document.querySelector("#goBack");

var counter;

start.addEventListener("click", function () {
  containerOne.style.display = "none";
  containertwo.style.display = "flex";
  counter = setInterval(timer, 1000);
  displayQuestion();
});

let time = 100;

function timer() {
  time--;
  if (time <= 0) {
    clearInterval(counter);

    endScreen();
  } else {
    document.getElementById("timer").innerHTML = "Time: " + time;
  }
}

function displayQuestion() {
  questions.textContent = questionsArr[currentIndex].text;
  buttoneOne.textContent = questionsArr[currentIndex].answers[0];
  buttoneTwo.textContent = questionsArr[currentIndex].answers[1];
  buttoneThree.textContent = questionsArr[currentIndex].answers[2];
  buttoneFour.textContent = questionsArr[currentIndex].answers[3];
}

function nextQuestion(event) {
  let clickedAnswer = event.target.textContent;
  console.log(clickedAnswer);

  nextQuestion += 1;
  // check if they clicked the correct answer
  console.log(questionsArr[currentIndex].correct);
  if (questionsArr[currentIndex].correct === clickedAnswer) {
    document.getElementById("result").innerHTML = "correct";
  } else {
    document.getElementById("result").innerHTML = "wrong";
    console.log(time);
    time = time - 20;
    document.getElementById("timer").innerHTML = "Time: " + time;
  }
  // is there more items in the array
  if (questionsArr.length - 1 === currentIndex) {
    score = time;
    document.getElementById("score").innerHTML = "score: " + score;
    endScreen();
  } else {
    currentIndex++;
    displayQuestion();
  }
}

function submitHighScore() {
    clearInterval(counter)
    time = 100
    document.getElementById("timer").innerHTML = "Time: ";
    currentIndex = 0
    document.getElementById("result").innerHTML = "";
  var initial = document.getElementById("initial").value;

  const result = { userName: initial, score: score };

  const savedScores = localStorage.getItem("highscore") || "[]";

  const highscores = [...JSON.parse(savedScores), result]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  localStorage.setItem("highscore", JSON.stringify(highscores));

  var list = document.getElementById("list");

  highscores.forEach((e) => {
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(`${e.userName} ${e.score}`));
    list.appendChild(entry);
  });

  containerOne.style.display = "none";
  containertwo.style.display = "none";
  containerThree.style.display = "none";
  containerFour.style.display = "flex";
}

function showHighScore() {
    clearInterval(counter)
    time = 100
    containerOne.style.display = "none";
    containertwo.style.display = "none";
    containerThree.style.display = "none";
    containerFour.style.display = "flex";
  var savedScores = []

    savedScores = JSON.parse(localStorage.getItem("highscore") || "[]");

  
    var list = document.getElementById("list");
  
    savedScores.forEach((e) => {
      var entry = document.createElement("li");
      entry.appendChild(document.createTextNode(`${e.userName} ${e.score}`));
      list.appendChild(entry);
    });
  
    
  }

function endScreen() {
  time = 0;
  document.getElementById("timer").innerHTML = "finished!";
  containertwo.style.display = "none";
  containerThree.style.display = "flex";

}

function clearHighScore() {
    localStorage.clear()
    
    document.getElementById("list").innerHTML = "";

}

function goHome() {
    containerOne.style.display = "flex";
    containertwo.style.display = "none";
    containerThree.style.display = "none";
    containerFour.style.display = "none";
}





buttoneOne.addEventListener("click", nextQuestion);
buttoneTwo.addEventListener("click", nextQuestion);
buttoneThree.addEventListener("click", nextQuestion);
buttoneFour.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", submitHighScore);
highScoreButton.addEventListener("click", showHighScore);
clearButton.addEventListener("click", clearHighScore);
backHomeButton.addEventListener("click", goHome);



