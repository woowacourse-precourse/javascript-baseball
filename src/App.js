const printGameStart = require('./printGameStart');
const createRandomNumbers = require('./createRandomNumbers');
const playGame = require('./playGame');

class App {
  play() {
    // 게임 준비
    printGameStart();
    const computerNum = createRandomNumbers();
    playGame(computerNum);
  }
}

module.exports = App;
