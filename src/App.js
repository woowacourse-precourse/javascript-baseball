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

    while (this.randomNumber !== this.userInputNumbers) {
      this.userInputNumbers = this.getUserInput();
      isInvalidLength(this.userInputNumbers);
      isDuplicated(this.userInputNumbers);
      isNaN(this.userInputNumbers);
      includeSpace(this.userInputNumbers);

      const { strikeCount, ballCount } = this.countBallandStrike();
      MissionUtils.Console.print(this.joinHint(ballCount, strikeCount));
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.restartOrEnd();
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

  restartOrEnd() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        MissionUtils.Console.close();

        if (number === "1") {
          this.game();
        } else if (number === "2") {
        } else {
          throw new Error("잘못된 입력입니다.");
        }
      }
    );
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
