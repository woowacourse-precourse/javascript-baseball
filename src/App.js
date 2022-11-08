const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let baseballNumber = createRandomNumber();
    startNumberBaseball();
    inputNumber(baseballNumber);
  }
}


const startNumberBaseball = () => {
  MissionUtils.Console.print("숫자 야구를 게임을 시작합니다.");
};

const inputNumber = (answerNumber) => {
  let ball = 0;
  let strike = 0;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    [ball, strike] = checkNumbers(answerNumber, number);
  });
};

const createRandomNumber = () => {
  const baseballArr = [];
  while (baseballArr.length < 3) {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!baseballArr.includes(randomNum)) {
      baseballArr.push(randomNum);
    }
  }
  return baseballArr;
};

const checkNumbers = (answerNumber, inputNumber) => {
  let ball = 0;
  let strike = 0;
  const inputNumArr = inputNumber.split("").map((el) => +el);
  for (let idx = 0; idx < 3; idx++) {
    if (answerNumber.includes(inputNumArr[idx])) {
      if (answerNumber.indexOf(inputNumArr[idx]) === idx) {
        strike++;
        continue;
      }
      ball++;
    }
  }
  return [ball, strike];
};

module.exports = App;
