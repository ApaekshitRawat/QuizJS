import data from "./data.json" assert { type: "json" };
const { quesJSON } = data;
// const./data.jsonstionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   answers: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

let score = 0;
let currentQues = 0;

const questionEL = document.querySelector("#question");
const optionEL = document.querySelector("#options");
const scoreEL = document.querySelector("#score");
const nextEL = document.querySelector("#next");
function showQuestion() {
  // logic for rendering questions
  // Destructuring obj
  console.log(quesJSON);
  const { correctAnswer, answers, question } = quesJSON[currentQues];
  const ndoe = document.createElement("h2");
  ndoe.textContent = question;
  questionEL.appendChild(ndoe);

  // logic for rendering options
  const shuffledAns = shuffleOptions(answers); // used shuffel options functionality
  shuffledAns.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    optionEL.appendChild(btn);
    // Event on buttons
    btn.addEventListener("click", () => {
      if (option === correctAnswer) {
        console.log("correct ans");
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score);
      scoreEL.textContent = `Score:${score}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQues++;
  if (currentQues >= quesJSON.length) {
    questionEL.textContent = "Quiz Completed ♠ !! ♠";
    optionEL.textContent = "";
    nextEL.remove();
  } else {
    questionEL.textContent = "";
    optionEL.textContent = "";
    showQuestion();
  }
}
showQuestion();
nextEL.addEventListener("click", () => {
  scoreEL.textContent = `Score:${score}`;
  nextQuestion();
});
// Shuffling the options

function shuffleOptions(options) {
  const len = options.length;
  const i = Math.floor(Math.random() * len);

  const j = Math.floor(Math.random() * len);
  [options[i], options[j]] = [options[j], options[i]];

  return options;
}
