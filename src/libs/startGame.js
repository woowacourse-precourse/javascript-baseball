const readline = require("readline");

const startGame = () => {
  const game = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return game;
};

module.exports = startGame;
