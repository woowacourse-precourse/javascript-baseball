const MissionUtils = require("@woowacourse/mission-utils");

const PLAYER_MESSAGE = "숫자를 입력해주세요 : ";
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";

const printGameStart = () => {
  MissionUtils.Console.print(START_MESSAGE);
};

const createComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return [...computer.join("").toString()];
};

const isThreeDigitNumber = (num) => {
  if (!isNaN(num)) return num.length === 3 ? true : false;
  else return false;
};

const game = () => {
  MissionUtils.Console.readLine(PLAYER_MESSAGE, (num) => {
    let playerNumber = num;
  });
};

class App {
  play() {
    printGameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
