// Quiz game 15/12/20
// Do you know me well?

var readlineSync = require("readline-sync");


// Introduction message
console.log("Hello my name is daksh, lets find out how well you know me.")

// Welcome message
var userName = readlineSync.question("What is your name? ")
console.log("------------------------")
console.log("Welcome " + userName)

var score = 0


// Questions
var questions = [
  {
    question:"Which engineering am I pursuing",
    answer:"Mechanical"
  },
  {
    question:"Where do I live",
    answer:"Mumbai"
  },
  {
    question:"What do I love",
    answer:"Football"
  }

]

// Function to check right or wrong 
function checkAnswer(question,answer) {
  console.log(question)
  var userAnswer = readlineSync.question("Ans ")
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right")
    score = score + 1
  }
  
  else
  console.log("Wrong")

}

// Multiple question asked using for loop
for(var i = 0; i <= 2; i++){
  var currentBlock = questions[i]
  var subQuestion = currentBlock.question
  var subAnswer = currentBlock.answer
  checkAnswer(subQuestion,subAnswer)
  console.log("----------------------")
}

console.log(score)

