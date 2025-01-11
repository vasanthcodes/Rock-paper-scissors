# Rock Paper Scissors Game

This project is a simple **Rock Paper Scissors** game implemented in HTML and JavaScript. It allows a user to play multiple rounds of the game against the computer, tracking scores and determining a winner at the end.

## File Overview

### 1. `index.html`
This is the HTML file that serves as the entry point for the application. It contains:

- A basic HTML structure with a reference to the `main.js` script.
- A `<title>` tag for naming the page as "Rock paper scissors".

### 2. `main.js`
This is the JavaScript file that handles the game's logic. Key components include:

#### a. **GetComputerChoice()**
Generates a random choice for the computer from the options: "rock", "paper", or "scissors".

#### b. **inputfromuser()**
Prompts the user to input their choice (rock, paper, or scissors).

#### c. **Playround()**
Executes a single round of the game:
- Compares the user's choice and the computer's choice.
- Determines the round's winner.
- Updates the score for either the user or the computer.
- Displays feedback for each round, such as the computer's choice, the user's choice, and the outcome.

#### d. **Game Loop**
- The game runs for 6 rounds in a `for` loop.
- After each round, scores are displayed in the console.

#### e. **Winner Announcement**
- After all rounds, the winner (user or computer) is announced through an alert.
- If the scores are tied, the game declares it a draw.

## How to Run

1. Open the `index.html` file in any modern web browser.
2. Follow the prompts in the browser to input your choices for each round.
3. View the results of each round and the final outcome.

## Features

- **Dynamic Choices**: The computer's choice is randomized in every round.
- **User Interaction**: Takes user input via prompts.
- **Score Tracking**: Keeps track of both user and computer scores.
- **Winner Declaration**: Announces the winner at the end of the game.

## Enjoy playing!
