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

  getInputAndCompare = (ANSWER) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      MissionUtils.Console.close();
      if (!this.isValid(input)) throw "Invalid input!"; // TODO: or this.checkIsValid() 하고 함수 안에서 throw?
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
