let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-badge');
const computerScore_span = document.getElementById('computer-badge');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const message = document.getElementById('makeyourmove-message');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertCase(anythingIwant) {
  if (anythingIwant === 'paper') return 'Paper';
  if (anythingIwant === 'scissors') return 'Scissors';
  return 'Rock';
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>you choose ${convertCase(user)} <br> computer choose ${convertCase(computer)}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
  document.body.style.backgroundColor = '#7fa2a9';
  message.innerHTML = `<p style="color:#3f5154; font-size:40px; font-weight:bold;">You win!</p>`;
}

function loses(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>you choose ${convertCase(user)} <br> computer choose ${convertCase(computer)}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
  document.body.style.backgroundColor = '#a9867f';
  message.innerHTML = `<p style="color:#65504c ; font-size:40px; font-weight:bold;">You lose!</p>`;
}

function draw(user, computer) {
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>It was a draw! <br> You both chose ${convertCase(user)}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
  document.body.style.backgroundColor = '#8f9996';
  message.innerHTML = `<p style="color:#555b5a; font-size:40px; font-weight:bold;">Try again!</p>`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
 
  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      loses(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));
}

main();
