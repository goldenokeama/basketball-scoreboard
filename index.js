const buttonAddOneHome = document.getElementById("add-one-home");
const buttonAddTwoHome = document.getElementById("add-two-home");
const buttonAddThreeHome = document.getElementById("add-three-home");

const buttonAddOneGuest = document.getElementById("add-one-guest");
const buttonAddTwoGuest = document.getElementById("add-two-guest");
const buttonAddThreeGuest = document.getElementById("add-three-guest");

const buttonNewGame = document.getElementById("new-game");

// ADDING EVENT LISTENERS TO THE BUTTONS
buttonAddOneHome.addEventListener("click", addOneHome);
buttonAddTwoHome.addEventListener("click", addTwoHome);
buttonAddThreeHome.addEventListener("click", addThreeHome);

buttonAddOneGuest.addEventListener("click", addOneGuest);
buttonAddTwoGuest.addEventListener("click", addTwoGuest);
buttonAddThreeGuest.addEventListener("click", addThreeGuest);

buttonNewGame.addEventListener("click", newGame);

const homeTextEl = document.getElementById("home-text");
const guestTextEl = document.getElementById("guest-text");

const homePointEl = document.getElementById("home-point");
const guestPointEl = document.getElementById("guest-point");
const newGameEl = document.getElementById("new-game");

let homePoint = 0;
let guestPoint = 0;

function indicateWinner() {
  homeTextEl.classList.remove("winner");
  guestTextEl.classList.remove("winner");

  if (homePoint > guestPoint) {
    homeTextEl.classList.add("winner");
  }

  if (guestPoint > homePoint) {
    guestTextEl.classList.add("winner");
  }
}

function addOneHome() {
  homePoint++;
  homePointEl.textContent = homePoint;

  indicateWinner();
}

function addTwoHome() {
  homePoint += 2;
  homePointEl.textContent = homePoint;

  indicateWinner();
}

function addThreeHome() {
  homePoint += 3;
  homePointEl.textContent = homePoint;

  indicateWinner();
}

function addOneGuest() {
  guestPoint++;
  guestPointEl.textContent = guestPoint;

  indicateWinner();
}

function addTwoGuest() {
  guestPoint += 2;
  guestPointEl.textContent = guestPoint;

  indicateWinner();
}

function addThreeGuest() {
  guestPoint += 3;
  guestPointEl.textContent = guestPoint;

  indicateWinner();
}

function newGame() {
  homePoint = 0;
  guestPoint = 0;

  homePointEl.textContent = homePoint;
  guestPointEl.textContent = guestPoint;

  indicateWinner();
}
