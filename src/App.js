const MissionUtils = require("@woowacourse/mission-utils");

const printer = (message) => {
  MissionUtils.Console.print(message);
};

const refNumbersGetter = () => {
  const refNumbers = [];

  while (refNumbers.length < 3) {
    const targetNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!refNumbers.includes(targetNumber)) {
      refNumbers.push(targetNumber);
    }
  }

  return refNumbers;
};

class App {
  play() {
    printer("숫자 야구 게임을 시작합니다.");
    const refNumbersArr = refNumbersGetter();
    printer(refNumbersArr);
  }
}

const app = new App();
app.play();

module.exports = { App, printer, refNumbersGetter };
