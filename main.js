let computerscore = 0;
var humanscore = 0;

//create a function which will get the computer choice
function getComputerChoice(max = 2) {
  let arra = ["rock", "paper", "scissors"];
  let b = Math.floor(Math.random() * max);
  return (arra = arra[b]);
}

// function for winner announcement
function winnerAnnouncement() {
  if (humanscore > computerscore) {
    console.log(`"your score = ${humanscore}
    "computer score = ${computerscore}`);
    console.log("YOU BEAT THE COMPUTER");
  } else if (humanscore == computerscore) {
    console.log("Its a draw");
  } else {
    console.log("COMPUTER WINS");
  }
}

// take an input from the user
// function getInputfromuser() {
//   let humanChoice = prompt("enter your choice");
//   return humanChoice;
// }

//check the input and the user value
function Playround(somthg, ComputerChoice) {
  let cc = ComputerChoice();
  console.log("computer chose " + cc);
  let lowerinput = somthg.toLowerCase();
  console.log("You chose " + somthg);
  let congrats = `congrats ${lowerinput} beats ${cc}`;
  if (lowerinput == "rock" || "paper" || "scissors") {
    if (lowerinput == cc) {
      console.log("Its a draw");
    } else if (
      (lowerinput == "paper" && cc == "rock") ||
      (lowerinput == "rock" && cc == "scissors") ||
      (lowerinput == "scissors" && cc == "paper")
    ) {
      console.log(congrats);
      humanscore += 1;
    } else {
      console.log(`computer wins,${cc} beats ${lowerinput}`);
      computerscore = computerscore + 1;
    }
  } else {
    console.log("please enter a valid choice");

    console.log(`You lose! ${cc} beats ${lowerinput}`);
  }
  winnerAnnouncement();
}

//loop to run the game multiple time
// for (let i = 1; i <= 6; i++) {
//   Playround(getInputfromuser(), getComputerChoice());
//   console.log("your Score=" + humanscore);
//   console.log("computer Score=" + computerscore);
// }

//interactive part for the game
// const rock = document.querySelectorAll("button");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

// calling the fucntion with appropriate input from user

// paper.addEventListener("click", () => Playround("paper", getComputerChoice));
// scissors.addEventListener("click", () =>
//   Playround("scissors", getComputerChoice)
// );

//To display the results
// rock.addEventListener("click", () => Playround("rock", getComputerChoice));
const buttons = document.querySelectorAll("button");
const sd=document.querySelector(".scoredisplay")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (computerscore == 5 || humanscore == 5) {
      sd.textContent = `Your score is ${humanscore} and computer scored ${computerscore}`;
      if(computerscore=5){
        const d=document.querySelector(".winner").textContent="YOU WINS"
      }
      else{
        const d=document.querySelector(".winner").textContent="  COMPUTER WIN"
      }
    } else {
      Playround(button.textContent, getComputerChoice);
    }
  });
});

