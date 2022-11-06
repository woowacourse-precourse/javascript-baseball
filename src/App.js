const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
} = require("./utils/Constants");
const { getComputerNumber, getUserNumber } = require("./utils/MissionUtils");

class App {
  play() {
    MissionUtils.Console.print(START_GAME);
    const computerNumbers = getComputerNumber(START_NUMBER, END_NUMBER);
    getUserNumber(REQUIRE_NUMBER);
  }
}

module.exports = App;

const app = new App();
app.play();
