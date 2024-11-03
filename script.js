// Array of choices
const choices = ["rock", "paper", "scissors"];
// the Player, computer, tie, result and music content is connected to the html using the document.getElementById function to select it's id attribute.
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
let music = document.getElementById("music");
music.volume = 0.1;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// name'd the function below play game as well as gave it the parameter of playerChoice. Within the function I created a const variable called computerChoice and made it equal our const variable choices that we declared on the second line. The Math.floor static method rounds any decimal down to an integer. The Math.random static method returns a floating point pseudo random number that's greater than or equal to 0 and less than 1 with equal distribution over the range of 0 to 1. Which you can then scale to your desired range. In this instance its 0 - 2 because the first index inside of the array is always 0. * 3 is Selecting the random 3 parameters in the choices array which hold rock paper and scissors.
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  // I Used an if else statement as well as a swicth statement to tell the computer what to do if certain events occur. If my choice is the same as the computers choice than it would give us a tie. Else it would run a switch statement of different posabilities regarding if we win or lose.
  if (playerChoice === computerChoice) {
    result = "Are you both the same person?🤯 It's a tie!!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors"
            ? "CONGRATS, YOU WIN!!🥳"
            : "I'M SORRY, YOU LOSE😔";
        break;
      case "paper":
        result =
          computerChoice === "rock"
            ? "CONGRATS, YOU WIN!!🥳"
            : "I'M SORRY, YOU LOSE😔";
        break;
      case "scissors":
        result =
          computerChoice === "paper"
            ? "CONGRATS, YOU WIN!!🥳"
            : "I'M SORRY, YOU LOSE😔";
        break;
    }
  }
  // .textContent targets the node(html elements being connected to the js file with the dom) element within the html and displays it through the template literal below. which is calling on the playerChoice, computerChoice and result from above.
  playerDisplay.textContent = `Player: ${playerChoice} `;
  computerDisplay.textContent = `Computer: ${computerChoice} `;
  resultDisplay.textContent = result;

  // Below we use a switch statement in which the case that we win I use playerScore++; in order to increment my score by 1. After doing this I do the same for computerScore and tieScore. The .textContent is connecting this functionality to the scoreDisplays in the html using the DOM(Document Object Model).
  switch (result) {
    case "CONGRATS, YOU WIN!!🥳":
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "I'M SORRY, YOU LOSE😔":
      computerScore++;
      computerScoreDisplay.textContent = playerScore;
      break;
    case "Are you both the same person?🤯 It's a tie!!":
      tieScore++;
      tieScoreDisplay.textContent = tieScore;
      break;
  }
}
