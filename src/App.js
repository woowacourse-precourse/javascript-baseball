const printGameStart = require('./printGameStart');
const createRandomNumbers = require('./createRandomNumbers');
const inputNumbers = require('./inputNumbers');
const MissionUtils = require("@woowacourse/mission-utils");
const compareWithInput = require('./compareWithInput');

class App {
  play() {
    printGameStart();
    createRandomNumbers();
    inputNumbers();
    const result = compareWithInput(123, '246');
    printCompareResult(result);
  }
}

module.exports = App;
