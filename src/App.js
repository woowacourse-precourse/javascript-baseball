const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
} = require("./utils/Constants");
const { getComputerNumber, getUserNumber } = require("./utils/MissionUtils");

function App() {
  this.play = () => {
    MissionUtils.Console.print(START_GAME);
    const computerNumbers = getComputerNumber(START_NUMBER, END_NUMBER);
    getUserNumber(computerNumbers, REQUIRE_NUMBER);
  };
}

module.exports = App;

// 삭제 예정
const app = new App();
app.play();
