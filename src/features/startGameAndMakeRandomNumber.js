const MissionUtils = require("@woowacourse/mission-utils");
const makeAnswer = require("../utils/makeRandomNumber");

// 게임 시작 및 정답이 될 랜덤변수 생성
const startGameAndMakeRandomNumber = () => {
  const randomNumber = makeAnswer();
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

  return randomNumber;
};

module.exports = startGameAndMakeRandomNumber;
