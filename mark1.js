console.log("   ");


var input = require("readline-sync");

score = 0;
var userName = input.question(" What is your name ? ");

console.log("Welcome", userName, "to DO YOU KNOW Ankit Quiz game?");

function play(question, answer) {
  var userAnswer = input.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right! ");
    score++;
  } else {
    console.log("wrong! ");
  }

  console.log("current score: ", score);
  console.log("--------");
}

var data = [
  {
    question: "In Which class Ankit Ranjan study? ",
    answer: "12th",
  },
  {
    question: "Is Ankit 18 years old ? ",
    answer: "No",
  },
  {
    question: "What Ankit usually do for time pass. ",
    answer: "movies",
  },
  {
    question: "Is Ankit have a girlfriend.",
    answer: "No",
  },
  {
    question: "What Ankit loves to do the most(passion).",
    answer: "Speaking",
  },
];

for (i = 0; i < data.length; i++) {
  var quiz = data[i];
  play(quiz.question, quiz.answer);

}

console.log("You score", score)
console.log(" ")
console.log("Thanks for playing.")
console.log("  ")
console.log("Could you please provide feedback on this game to help us improve it?")