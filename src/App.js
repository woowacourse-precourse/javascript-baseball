const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeAnswer = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  };

  isDuplicated = (input) => {
    const inputArray = input.split("");
    const inputSet = new Set(inputArray);
    return inputArray.length !== inputSet.size;
  };

  containsThreeNumbers = (input) => {
    return input.length === 3;
  };

  containsOnlyNumbers = (input) => {
    return input >= "102" && input <= "987";
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

  printResult = (ANSWER, input) => {
    if (ANSWER === input) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.close();
      return;
    }

    let strike = 0;
    let ball = 0;
    let nothing = true;

    for (let i = 0; i < ANSWER.length; i++) {
      const LETTER = input[i];
      if (ANSWER.includes(LETTER)) {
        ANSWER[i] === LETTER ? strike++ : ball++;
        nothing = false;
      }
    }

    const resultMessage = this.getResultMessage(strike, ball, nothing);
    MissionUtils.Console.print(resultMessage);
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
