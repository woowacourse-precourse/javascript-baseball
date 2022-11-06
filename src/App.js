const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    startGame();
    MissionUtils.Console.close();
  }
}

const startGame = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  const answer = generateAnswer();
  inputNumber(answer);

  return;
};

module.exports = App;
