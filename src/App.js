const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_NUMBER,
  END_NUMBER,
  START_GAME,
  REQUIRE_NUMBER,
} = require("./utils/Constants");
const { createComputerNumber, getUserNumber } = require("./utils/MissionUtils");

function App() {
  this.state = {
    userNumbers: "",
    computerNumbers: [],
  };
  this.play = () => {
    MissionUtils.Console.print(START_GAME);
    const computerNumbers = createComputerNumber(START_NUMBER, END_NUMBER);
    getUserNumber(computerNumbers, REQUIRE_NUMBER);
  };
}

module.exports = App;

// 삭제 예정
const app = new App();
app.play();
