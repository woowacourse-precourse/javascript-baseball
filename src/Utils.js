const MissionUtils = require("@woowacourse/mission-utils");

function printMessage(result) {
  MissionUtils.Console.print(result);
}

function printWinMessage(result) {
  MissionUtils.Console.print(result);
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.print(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
}

function printGameMessage(strike, ball) {
  let text = "";
  if (strike === 0 && ball === 0) {
    text = "낫싱";
  } else if (strike === 0 && ball !== 0) {
    text = `${ball}볼`;
  } else if (strike !== 0 && ball === 0) {
    text = `${strike}스트라이크`;
  } else {
    text = `${ball}볼 ${strike}스트라이크`;
  }
  return text;
}

function gameStartMsg() {
  console.log("숫자 야구 게임을 시작합니다.");
}

module.exports = {
  printMessage,
  printWinMessage,
  printGameMessage,
  gameStartMsg,
};
