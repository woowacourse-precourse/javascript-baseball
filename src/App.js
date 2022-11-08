const MissionUtils = require("@woowacourse/mission-utils");
const {
  isInvalidLength,
  isDuplicated,
  isNaN,
  includeSpace,
} = require("../src/inputValidation");

class App {
  game() {
    this.randomNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const randomNumbers = new Set();

    while (randomNumbers.size < 3) {
      const pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(pickedNumber);
    }
    return Array.from(randomNumbers).join("");
  }

  getUserInput() {
    let userInput = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      userInput = input;
      MissionUtils.Console.close();
    });
    return userInput;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.game();
  }
  countBallandStrike = () => {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < this.randomNumber.length; i += 1) {
      if (this.randomNumber[i] === this.userInputNumbers[i]) {
        strikeCount += 1;
      } else if (this.userInputNumbers.indexOf(this.randomNumber[i]) !== -1) {
        ballCount += 1;
      }
    }

    return { ballCount, strikeCount };
  };

  joinHint = (ballCount, strikeCount) => {
    const ballHint = ballCount ? `${ballCount}볼` : "";
    const strikeHint = strikeCount ? `${strikeCount}스트라이크` : "";
    if (ballHint == "" && strikeHint == "") return "낫싱";
    if (strikeHint == "") return ballHint;
    if (ballHint == "") return strikeHint;
    return `${ballHint} ${strikeHint}`;
  };
}

module.exports = App;
