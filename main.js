let computerscore = 0;
var humanscore = 0;

//create a function which will get the computer choice
function GetComputerChoice(max = 2) {
  let arra = ["rock", "paper", "scissors"];
  let b = Math.floor(Math.random() * max);
  return (arra = arra[b]);
}

//take an input from the user
function inputfromuser() {
  let humanChoice = prompt("enter your choice");
  return humanChoice;
}

//check the input and the user value
function Playround(somthg, ComputerChoice) {
  console.log("computer chose " + ComputerChoice);
  let lowerinput = somthg.toLowerCase();
  console.log("You chose " + somthg);
  let congrats = `congrats ${lowerinput} beats ${ComputerChoice}`;
  if (lowerinput == "rock" || "paper" || "scissors") {
    if (
      (lowerinput == "paper" && ComputerChoice == "rock") ||
      (lowerinput == "rock" && ComputerChoice == "scissors") ||
      (lowerinput == "scissors" && ComputerChoice == "paper")
    ) {
      console.log(congrats);
      humanscore += 1;
    } else if (lowerinput == ComputerChoice) {
      console.log("Its a draw");
    } else {
      console.log(`computer wins,${ComputerChoice} beats ${lowerinput}`);
      computerscore = computerscore + 1;
    }
  } else {
    console.log("please enter a valid choice");

    console.log(`You lose! ${GetComputerChoice()} beats ${lowerinput}`);
  }
}

//loop to run the ge=ame multiple time
for (let i = 1; i <= 6; i++) {
  Playround(inputfromuser(), GetComputerChoice());
  console.log("your Score=" + humanscore);
  console.log("computer Score=" + computerscore);
}

// display the winner
if (humanscore > computerscore) {
  alert(`"your score = ${humanscore}
"computer score = ${computerscore}`);
  alert("YOU BEAT THE COMPUTER");
} else if (humanscore == computerscore) {
  alert("Its a draw");
} else {
  console.log("COMPUTER WINS");
}
