const MissionUtils = require("@woowacourse/mission-utils");

const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const MIN_ANSWER = "102";
const MAX_ANSWER = "987";
const NUMBER_LENGTH = 3;

class App {
  makeAnswer = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH).join("");
  };

  isDuplicated = (input) => {
    const inputArray = input.split("");
    const inputSet = new Set(inputArray);
    return inputArray.length !== inputSet.size;
  };

  containsThreeNumbers = (input) => {
    return input.length === NUMBER_LENGTH;
  };

  containsOnlyNumbers = (input) => {
    return input >= MIN_ANSWER && input <= MAX_ANSWER;
  };

  isValid = (input) => {
    if (!this.containsThreeNumbers(input) || !this.containsOnlyNumbers(input) || this.isDuplicated(input)) return false;
    return true;
  };

  getResultMessage = (strike, ball, nothing) => {
    let message = "";
    if (nothing) message = "낫싱";
    if (ball) message += `${ball}볼 `;
    if (strike) message += `${strike}스트라이크`;
    return message;
  };

  handleSuccess = () => {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ", (input) => {
      if (input === "1") this.play();
      if (input === "2") {
        MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
        MissionUtils.Console.close();
        return;
      }
    });
  };

  printResult = (ANSWER, input) => {
    let strike = 0;
    let ball = 0;
    let nothing = true;

    for (let i = 0; i < ANSWER.length; i++) {
      const NUMBER = input[i];
      if (ANSWER.includes(NUMBER)) {
        ANSWER[i] === NUMBER ? strike++ : ball++;
        nothing = false;
      }
    }

    const resultMessage = this.getResultMessage(strike, ball, nothing);
    MissionUtils.Console.print(resultMessage);

    if (strike === 3) {
      this.handleSuccess();
    }

    this.getInputAndCompare(ANSWER);
  };

  getInputAndCompare = (ANSWER) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.isValid(input)) throw "Invalid input!"; // TODO: or this.checkIsValid() 하고 함수 안에서 throw?
      this.printResult(ANSWER, input);
    });
  };

  play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const ANSWER = this.makeAnswer();
    this.getInputAndCompare(ANSWER);
  };
}

const app = new App();
app.play();

module.exports = App;
