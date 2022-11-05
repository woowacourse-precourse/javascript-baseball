const printGameStart = require('./printGameStart');
const createRandomNumbers = require('./createRandomNumbers');

class App {
  play() {
    printGameStart();
    createRandomNumbers();
  }
}

module.exports = App;
