let userName = "Edward";
let userQuestion = "Will Fisher sell in the next month?";
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

// console.logs

userName ? console.log(`Hello, ${userName}.`) : console.log("Hello!");
console.log(userQuestion + "?");

// logic

switch (randomNumber) {
  case 0:
    eightBall = "It is certainly so";
    break;
  case 1:
    eightBall = "No doubt";
    break;
  case 2:
    eightBall = "Hazy, try again";
    break;
  case 3:
    eightBall = "Don't count on it";
    break;
  case 4:
    eightBall = "my sources say no";
    break;
  case 5:
    eightBall = "outlook not good";
    break;
  case 6:
    eightBall = "Signs point to yes";
    break;
  case 7:
    eightBall = "NOOOO";
    break;
  default:
    console.log("Invalid answer");
    break;
}

console.log(`The eightball answered: ${eightBall}`);
