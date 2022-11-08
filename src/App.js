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
  return answer;
};

const promptInput = function promptUserGuessInput(answer) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    validateInput(input);
    const result = calculateResult(input, answer);
    MissionUtils.Console.print(result);
    if (result === "3스트라이크") {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
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
    throw new Error("입력이 잘못되었습니다.");
  }
};

const calculateResult = function calculateResult(input, answer) {
  const inputArray = input.split("").map(Number);
  const answerArray = answer;
  const ball = countBall(inputArray, answerArray);
  const strike = countStrike(inputArray, answerArray);

  if (ball === 0 && strike === 0) {
    return "낫싱";
  }
  if (ball === 0) {
    return `${strike}스트라이크`;
  }
  if (strike === 0) {
    return `${ball}볼`;
  }
  
  return `${ball}볼 ${strike}스트라이크 `;
};

const countBall = function countBall(userInput, answer) {
  let ball = 0;
  userInput.forEach((userInput, index) => {
    if (answer.includes(userInput) && userInput !== answer[index]) {
      ball++;
    }
  });
  return ball;
};

const countStrike = function countStrike(userInput, answer) {
  let strike = 0;
  userInput.forEach((userInput, index) => {
    if (userInput === answer[index]) {
      strike++;
    }
  });
  return strike;
};

const askPlayNewGame = function askUserPlayNewGame() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (input) => {
      if (input === "1") {
        playGame();
      }
      if (input === "2") {
        MissionUtils.Console.print("게임을 종료합니다.");
        MissionUtils.Console.close();
      }
    }
  );
};

const playGame = function playGame() {
  const answer = generateAnswer();
  promptInput(answer);
};

class App {
  play() {
    startMessage();
    playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
