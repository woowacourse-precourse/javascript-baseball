const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let strike = 0;
    let ball = 0;
    gameStartingText();
    const computerNumbers = computerNumbersMaking();
    console.log(computerNumbers);
    const playerNumbers = playerNumbersInput();
  }
}

const gameStartingText = () => {
  console.log("숫자 야구 게임을 시작합니다.");
}

const computerNumbersMaking = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const playerNumbersInput = () => {
};

module.exports = App;
