const createResult = require("././createResult");
const MissionUtils = require("@woowacourse/mission-utils");

function playGame(answer) {
  let repeat = true;
  while (repeat) {
    const USERINPUT = UserInput();
    const RESULT = createResult(USERINPUT, answer);
    console.log(RESULT);

    if (RESULT === "3스트라이크") {
      console.log("게임이 종료됩니다.");
      repeat = false;
    }
  }
}

playGame();

module.exports = playGame;