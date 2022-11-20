const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerValue = [];
  }
  play() {
    this.computerValue = this.renderComputerValue();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (input) =>
      this.userInputValue(input)
    );
  }
  renderComputerValue() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      let num = MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
      if (!arr.includes(num)) arr.push(num);
    }
    return arr;
  }
  userInputValidation(input) {
    const userInputReg = /[1-9]{3}/g;
    let err = "";
    let result = true;
    const checkarr = new Set([...input]);
    if (input.length !== 3) {
      err = "3글자를 입력해주세요";
      result = false;
    } else if (!userInputReg.test(input)) {
      err = "1-9 사이의 값을 입력해주세요.";
      result = false;
    } else if (checkarr.size !== 3) {
      err = "서로 다른 값을 입력해주세요.";
      result = false;
    }
    return [result, err];
  }
  userInputValue(input) {
    const [isValidate, err] = this.userInputValidation(input);
    if (!isValidate) throw new Error(err);
    const [strikeCount, ballCount] = this.getWholeCount(input);
    if (!strikeCount && !ballCount) MissionUtils.Console.print("낫싱");
    else {
      if (ballCount && !strikeCount) {
        MissionUtils.Console.print(`${ballCount}볼`);
      } else if (ballCount && strikeCount) {
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      } else if (!ballCount && strikeCount) {
        MissionUtils.Console.print(`${strikeCount}스트라이크`);
      }
    }
    if (strikeCount === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (input) => this.userResult(input)
      );
    } else {
      MissionUtils.Console.readLine("숫자를 입력해주세요: ", (input) =>
        this.userInputValue(input)
      );
    }
  }
  getWholeCount(input) {
    const userInput = input.split("").map((char) => +char);
    console.log(userInput);
    const strikeCount = this.getStrikeCount(userInput, this.computerValue);
    const ballCount = this.getBallCount(userInput, this.computerValue);
    return [strikeCount, ballCount];
  }
  getStrikeCount(user, computer) {
    return computer.filter((n, i) => n === user[i]).length;
  }
  getBallCount(user, computer) {
    return user.reduce((acc, cur, index) => {
      if (cur === computer[index]) return acc;
      if (computer.includes(cur)) return acc + 1;
      else return acc;
    }, 0);
  }
  userResult(input) {
    if (input === "1") {
      this.play();
      return;
    } else if (input === "2") {
      MissionUtils.Console.print("게임을 종료합니다.");
      MissionUtils.Console.close();
    }
  }
}

const app = new App();
app.play();
module.exports = App;
