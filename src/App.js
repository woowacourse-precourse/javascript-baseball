const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    let BaseballNumber = createRandomNumber();
    startBaseballNumber();
    inputNumber(BaseballNumber);
  }
  
}

const startBaseballNumber = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const inputNumber = (answerNumber) => {
  let ball = 0;
  let strike = 0;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {

    [ball, strike] = checkNumbers(answerNumber, number);
    let sentence = printBallStrike(ball, strike);
    MissionUtils.Console.print(`${sentence}`);
    if (strike !== 3) inputNumber(answerNumber);
  });
};

const createRandomNumber = () => {
  const baseballArray = [];
  while (baseballArray.length < 3) {
    let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!baseballArray.includes(randomNum)) {
      baseballArray.push(randomNum);
    }
  }
  return baseballArray
};

const checkNumbers = (answerNumber, inputNumber) => {
  let ball = 0;
  let strike = 0;
  const inputNumberArray = inputNumber.split("").map((el) => +el);
  for (let idx = 0; idx < 3; idx++) {
    if (answerNumber.includes(inputNumberArray[idx])) {
      if (answerNumber.indexOf(inputNumberArray[idx]) === idx) {
        strike++;
        continue;
      }
      ball++;
    }
  }
  return [ball, strike];
};

const printBallStrike = (ballNum, strikeNum) => {
  let sentence = "";
  if (ballNum !== 0) sentence += ballNum + "볼 ";
  if (strikeNum !== 0) sentence += strikeNum + "스트라이크";
  if (ballNum === 0 && strikeNum === 0) sentence = "낫싱";
  return sentence.trim();
};

module.exports = App;
