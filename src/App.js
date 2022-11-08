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

class App {
  play() {}
}

module.exports = App;
