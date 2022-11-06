const printGameStart = require('./printGameStart');
const createRandomNumbers = require('./createRandomNumbers');
const inputNumbers = require('./inputNumbers');
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    printGameStart();
    createRandomNumbers();
    inputNumbers();
  }
}

module.exports = App;
