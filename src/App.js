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
    let sentence = printBallStrike(ball, strike);
    MissionUtils.Console.print(`${sentence}`);
    if (strike !== 3) inputNumber(answerNumber);
    else {
      goAndStop(strike);
    }
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


const printBallStrike = (ballNum, strikeNum) => {
  let sentence = "";
  if (ballNum !== 0) sentence += ballNum + "볼 ";
  if (strikeNum !== 0) sentence += strikeNum + "스트라이크";
  if (ballNum === 0 && strikeNum === 0) sentence = "낫싱";
  return sentence.trim();
};



const goAndStop = (strikeNum) => {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.print(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  MissionUtils.Console.readLine("", (number) => {
    errorTestGoandStop(number);
    if (number === "1") {
      let newBaseballNum = createRandomNumber();
      inputNumber(newBaseballNum);
    }
    if (number === "2") {
      MissionUtils.Console.close();
    }
  });
};

module.exports = App;
