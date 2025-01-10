console.log("hello world");

//create a function which will get the computer choice
function GetComputerChoice(max = 3) {
  return Math.floor(Math.random() * max + 1);
}
console.log(GetComputerChoice());

//take an input from the user
function inputfromuser() {
  let humanChoice = prompt("enter your choice");
  return humanChoice;
}
let computerscore = 0;
var humanscore = 0;
let congrats = "congrats You win!!, You get a point";

//check the input and the user value
function Playround(somthg, ComputerChoice) {
  let lowerinput = somthg.toLowerCase();
  console.log(somthg);
  if (lowerinput == "rock" || "paper" || "scissors") {
    if (lowerinput == "rock" && ComputerChoice == 1) {
      alert(congrats);
      humanscore += 1;
    } else if (lowerinput == "scissors" && ComputerChoice == 2) {
      alert(congrats);
      humanscore += 1;
    } else if (lowerinput == "paper" && ComputerChoice == 3) {
      alert(congrats);
      humanscore += 1;
    } else {
      alert("Oosp, you lost!, Computer gets a point!!");
      computerscore += 1;
    }
  }
  else{
    alert("please enter a valid choice")
    inputfromuser();
  }
}

for (let i = 1; i <= 5; i++) {
  inputfromuser();
  GetComputerChoice();
  Playround(inputfromuser(), GetComputerChoice());
  console.log("your Score=" + humanscore);
  console.log("computer Score=" + computerscore);
}
if (humanscore > computerscore) {
  alert("YOU BEAT THE COMPUTER");
} else {
  alert("COMPUTER WINS");
}

// display the winner
