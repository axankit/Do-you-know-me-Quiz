console.log("   ");

// Building Do you know me Quiz

/* Context on what i am going to build
The quiz can be "Do you know me" or a similar CLI QUIZ on any other topic too. Take Username as input.
Have at least 5 questions.
Display the final score to the user

*/

var input = require("readline-sync");

score = 0;
var userName = input.question(" What is your name ? ");

console.log("Welcome", userName, "to DO YOU KNOW Ankit Quiz game?");

function play(question, answer) {
  var userAnswer = input.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("right! ");
    score++;
  } else {
    console.log("wrong! ");
  }

  console.log("current score: ", score);
  console.log("--------");
}

var userScoredata = [
  {
    name: "Ankit",
    score: 4,
  },
  {
    name: "Raushani",
    score: 3,
  },
];

var data = [
  {
    question: "In Which class Ankit Ranjan study? ",
    answer: "12",
  },
  {
    question: "Is Ankit 18 years old ",
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

console.log("You score", score);
console.log(" ");

/* Lets figure the high score { chat gpt} */
var highScore = 0;
var highScoreUser = "";

for (var i = 0; i < userScoredata.length; i++) {
  var user = userScoredata[i];
  if (user.score > highScore) {
    highScore = user.score;
    highScoreUser = user.name;
  }
}

// console.log("The user with the highest score is: " + highScoreUser);
// console.log("The high score is: " + highScore);


if (score > highScore) {
    console.log("Hurrah! You made the new high score.");
  }


console.log("Thanks for playing.");
