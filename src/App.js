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

const generateAnswer = (props) => {
  const answer = [];
  while (answer.length < 3) {
    const num = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(num)) {
      answer.push(num);
    }
  }
  return answer.join("");
};

module.exports = App;
