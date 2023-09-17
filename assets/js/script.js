const questionsArr = [
  {
    text: "Question 1",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct: "option 2",
  },
  {
    text: "Question 2",
    answers: ["Answer 1 for questtion 2", "Answer 2", "Answer 3", "Answer 4"],
    correct: "option 2",
  },
  {
    text: "Question 3",
    answers: ["Answer 1 for questtion 3", "Answer 2", "Answer 3", "Answer 4"],
    correct: "option 2",
  },
  {
    text: "Question 4",
    answers: ["Answer 1 for questtion 4", "Answer 2", "Answer 3", "Answer 4"],
    correct: "option 2",
  },
  {
    text: "Question 5",
    answers: ["Answer 1 for questtion 5", "Answer 2", "Answer 3", "Answer 4"],
    correct: "option 2",
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
const answerButton = document.querySelector(".answerBtns");

start.addEventListener("click", function () {
  containerOne.style.display = "none";
  containertwo.style.display = "flex";

  displayQuestion();
});

function displayQuestion() {
  questions.textContent = questionsArr[currentIndex].text;
  buttoneOne.textContent = questionsArr[currentIndex].answers[0];
}

function nextQuestion(event) {
  let clickedAnswer = event.target.textContent;
  console.log(clickedAnswer);

  nextQuestion += 1;
  // check if they clicked the correct answer
  console.log(questionsArr[currentIndex].correct)
  if (questionsArr[currentIndex].correct === clickedAnswer) {
    document.getElementById("result").innerHTML = "correct";
  } else {
    document.getElementById("result").innerHTML = "wrong"
  }
  // is there more items in the array
  currentIndex++;
  displayQuestion();
}

buttoneOne.addEventListener("click", nextQuestion);
buttoneTwo.addEventListener("click", nextQuestion);
buttoneThree.addEventListener("click", nextQuestion);
buttoneFour.addEventListener("click", nextQuestion);
