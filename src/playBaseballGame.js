const MissionUtils = require("@woowacourse/mission-utils");
const baseballGameCycle = require("./baseballGameCycle");
const createRandomNumbers = require("./createRandomNumbers");

function playBaseballGame() {
  const randomNumbers = createRandomNumbers();
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

  baseballGameCycle(randomNumbers);
}

module.exports = playBaseballGame;
