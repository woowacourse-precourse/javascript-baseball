const MissionUtils = require("@woowacourse/mission-utils");

const makeRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log(computer);
  return computer;
};

const inputNumber = () => {
  let userInputNumber;

  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    if (answer == 1) makeRandomNumber();
    if (answer == 2) MissionUtils.Console.close();
  });

  return userInputNumber;
};

class App {
  play() {
    makeRandomNumber();

    inputNumber();

    return;
  }
}

/** test용 코드 */
const app = new App();
app.play();

module.exports = App;
