const printGameStart = require('./printGameStart');
const createRandomNumbers = require('./createRandomNumbers');
const playGame = require('./playGame');

class App {
  play() {
    printGameStart();
    playGame(createRandomNumbers());
  }
}

const app = new App();
app.play();

module.exports = App;
