"use strict";

// Selecting elements
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores, currentScore, activePlayer, playing;

const init = function () {
	// set all scores to 0
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	// reset score displays
	current0El.textContent = 0;
	current1El.textContent = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;

	// remove winner class, and set player 1 as starting player
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
	player0El.classList.add("player--active");
	player1El.classList.remove("player--active");

	diceEl.classList.add("hidden");
};
init();

const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
	if (playing) {
		// 1. Generate random dice roll
		let dice = Math.trunc(Math.random() * 6) + 1;

		// 2. Display dice
		diceEl.classList.remove("hidden");
		diceEl.src = `dice-${dice}.png`;

		// 3. Check for rolled 1: if true, switch player and reset current score
		if (dice !== 1) {
			// add to current score
			currentScore += dice;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
		} else {
			// switch
			switchPlayer();
		}
	}
});

btnHold.addEventListener("click", function () {
	/* 	if (activePlayer === 0) {
		score0 += currentScore;
		score0El.textContent = score0;
		switchPlayer();
	} else {
		score1 += currentScore;
		score1El.textContent = score1;
		switchPlayer();
	} */
	if (playing) {
		// Update the correct player's score
		scores[activePlayer] += currentScore;

		// Show the player's updated score
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		// Check if current player won
		if (scores[activePlayer] >= 20) {
			playing = false;
			diceEl.classList.add("hidden");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			// document.getElementById(
			// 	`name--${activePlayer}`
			// ).textContent = `Player ${activePlayer + 1} Wins!!`;
		} else {
			// Switch player
			switchPlayer();
		}
	}
});

btnNew.addEventListener("click", init);
