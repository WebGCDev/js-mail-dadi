let playerHuman, playerAi;
const output = document.getElementById('output');
const min = 1;
const max = 6;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

playerHuman = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(playerHuman);

playerAi = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(playerAi);
