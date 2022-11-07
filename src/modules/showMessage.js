const { Console } = require("@woowacourse/mission-utils");

const showStartMessage = () => {
  Console.print("숫자 야구 게임을 시작합니다.");
}

const showCountMessage = (ballCount, strikeCount) => {
  if (ballCount === 0) {
    Console.print(`${strikeCount}스트라이크`);
  } else if (strikeCount === 0) {
    Console.print(`${ballCount}볼`);
  } else {
    Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
  }
}

const showNothingMessage = () => {
  Console.print('낫싱');
}

const showCorrectMessage = () => {
  Console.print('3스트라이크');
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
}

module.exports = { showStartMessage, showCountMessage, showNothingMessage, showCorrectMessage };