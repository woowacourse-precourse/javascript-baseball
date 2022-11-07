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

const isOneToNine = (num) => {
  return /^[1-9]+$/.test(num);
};

const isDifferentDigitNumber = (num) => {
  const numArr = [...String(num)];

  return new Set(numArr).size == numArr.length ? true : false;
};

const validatePlayerNumber = (num) => {
  if (
    isThreeDigitNumber(num) &&
    isOneToNine(num) &&
    isDifferentDigitNumber(num)
  )
    return true;
  else throw PLAYER_ERROR_MESSAGE;
};

const game = () => {
  MissionUtils.Console.readLine(PLAYER_MESSAGE, (num) => {
    let playerNumber = num;

    validatePlayerNumber(num);
  });
};

class App {
  play() {
    printGameStart();
    game();
  }
}

module.exports = App;

const app = new App();
app.play();
