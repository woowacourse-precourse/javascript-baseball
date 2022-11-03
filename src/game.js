const MissionUtils = require("@woowacourse/mission-utils");
const pickedNumberByComputer = require("./pickedNumberByComputer");

function game() {
  const COMPUTER = pickedNumberByComputer();
  let threeStrike = false;
  while (!threeStrike) {}
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

module.exports = game;
