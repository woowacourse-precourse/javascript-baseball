const { Console } = require("@woowacourse/mission-utils");
const { START } = require("./Constant");
const { makeRandomNumber } = require("./Make");
const { selectNumQuery, selectNextQuery } = require("./Query");

class App {
  play() {
    Console.print(START);
    selectNumQuery(makeRandomNumber(), selectNextQuery);
  }
}

module.exports = App;
