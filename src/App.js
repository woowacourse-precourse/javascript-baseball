const MissionUtils = require("@woowacourse/mission-utils");

const startMessage = function printGameStartMessage() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const generateAnswer = function generateRandomThreeNumbers() {
  const answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
};

const promptInput = function promptUserGuessInput(answer) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    validateInput(input);
    const result = calculateResult(input, answer);
    MissionUtils.Console.print(result);
    if (result === "3개의 숫자를 모두 맞히셨습니다! 게임 종료") {
      askPlayNewGame();
      return;
    }
    promptInput(answer);
  });
};

const validateInput = function validateInput(input) {
  if (input.length !== 3) {
    throw new Error("입력값은 3자리여야합니다.");
  }
  const regExp = /^[1-9]+$/;
  if (!regExp.test(input)) {
    throw new Error("입력값은 1~9 사이숫자여야합니다.");
  }
  const inputArray = input.split("");
  const inputSet = new Set(inputArray);
  if (inputArray.length !== inputSet.size) {
    console.log("입력이 잘못되었습니다.");
    throw new Error("입력이 잘못되었습니다.");
  }
};

const calculateResult = function calculateResult(input, answer) {
  const inputNumbers = input.split("").map((number) => Number(number));
  const answerNumbers = answer.split("").map((number) => Number(number));
  const ball = countBall(inputNumbers, answerNumbers);
  const strike = countStrike(inputNumbers, answerNumbers);

  if (ball === 0 && strike === 0) {
    return "낫싱";
  }
  if (ball === 0) {
    return `${strike} 스트라이크`;
  }
  if (strike === 0) {
    return `${ball} 볼`;
  }
  return `${strike} 스트라이크 ${ball} 볼`;
};

const countBall = function countBall(inputNumbers, answerNumbers) {
  let ball = 0;
  inputNumbers.forEach((inputNumber, index) => {
    if (answerNumbers.includes(inputNumber) && inputNumber !== answerNumbers[index]) {
      ball++;
    }
  });
  return ball;
};

const countStrike = function countStrike(inputNumbers, answerNumbers) {
  let strike = 0;
  inputNumbers.forEach((inputNumber, index) => {
    if (inputNumber === answerNumbers[index]) {
      strike++;
    }
  });
  return strike;
};




class App {
  play() {}
}

module.exports = App;
