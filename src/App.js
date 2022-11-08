const MissionUtils = require("@woowacourse/mission-utils");
const ExceptionHandler = require("./ExceptionHandler");
const BaseballCounter = require("./BaseBallCounter");

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
    const result = BaseballCounter.calculateResult(input, answer);
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
  ExceptionHandler.validateInputLength(input);
  ExceptionHandler.validateInputisNumber(input);
  ExceptionHandler.validateInputisNotDuplicated(input);
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
