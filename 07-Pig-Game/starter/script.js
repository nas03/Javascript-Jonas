'use strict';
const player1 = document.querySelector('.player--1')
const player0 = document.querySelector('.player--0')

const current1 = document.getElementById('current--1')
const current0 = document.getElementById('current--0')

const score1 = document.getElementById('score--1');
const score0 = document.getElementById('score--0')

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')

const dice = document.querySelector('.dice');

let count = 0;
let firstRoll = 0;
let sum = 0;
let score1Max = 0, score0Max = 0;
function newGame() {
    score0.textContent = 0;
    score1.textContent = 0;
    if (!player1.classList.contains('player--active')) {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
    }
    current0.textContent = 0;
    current1.textContent = 0;
    count = 0;
    firstRoll = 0;
    sum = 0;
}

function rollDice() {
    let random = Math.trunc(Math.random() * 6 + 1);
    count++;
    let holdDice = false;
    if (count == 1) firstRoll = random;
    if (random == 1) dice.setAttribute('src', 'dice-1.png');
    if (random == 2) dice.setAttribute('src', 'dice-2.png');
    if (random == 3) dice.setAttribute('src', 'dice-3.png');
    if (random == 4) dice.setAttribute('src', 'dice-4.png');
    if (random == 5) dice.setAttribute('src', 'dice-5.png');
    if (random == 6) dice.setAttribute('src', 'dice-6.png');
    sum += random;
    if (random == firstRoll && count != 1) {
        sum = 0;
        holdDice = true;
    }
    if (player1.classList.contains('player--active')) current1.textContent = sum;
    else current0.textContent = sum;

    if (holdDice) { hold() }
}

function hold() {
    count = 0;
    firstRoll = 0;
    if (player0.classList.contains('player--active')) {
        score0Max += sum;
        score0.textContent = score0Max;
        player0.classList.remove('player--active')
        player1.classList.add('player--active')
    } else {
        score1Max += sum;
        score1.textContent = score1Max;
        player0.classList.add('player--active')
        player1.classList.remove('player--active')
    }
    sum = 0;
}
btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);