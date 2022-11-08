const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let randombaseball = createRandomNumber();
    start();
  }
}
module.exports = App;

const createRandomNumber = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    }
  }
  return numbers;
};

const start = () => {
  MissionUtils.Console.print("숫자 야구를 게임을 시작합니다.");
}

const app = new App();
app.play();
