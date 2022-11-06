const MissionUtils = require("@woowacourse/mission-utils");
const mode = require("./a.js");
const { START_NUMBER, END_NUMBER, START_GAME } = require("./utils/Constants");
const { getComputerNumber } = require("./utils/MissionUtils");

class App {
  play() {
    MissionUtils.Console.print(START_GAME);
    const computerNumbers = getComputerNumber(START_NUMBER, END_NUMBER);
  }
}

module.exports = App;

const app = new App();
app.play();
