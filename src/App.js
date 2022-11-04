const { gameStart, generateRandomNumbers } = require('./gameStart');
const GameData = require('./GameData');

class App {
  play() {
    const gameData = new GameData();
    gameStart(generateRandomNumbers(gameData));
  }
}

const app = new App();
app.play();

module.exports = App;
