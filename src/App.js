const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printer(message) {
    MissionUtils.Console.print(message);
  }

  refNumbersGetter() {
    const refNumbers = [];

    while (refNumbers.length < 3) {
      const targetNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!refNumbers.includes(targetNumber)) {
        refNumbers.push(targetNumber);
      }
    }

    return refNumbers;
  }

  stringToArrConverter(numbersString) {
    const numbersStringArray = numbersString.split("");
    const numbersNumberArray = numbersStringArray.map((number) =>
      Number(number)
    );
    return numbersNumberArray;
  }

  discriminator(userNumbers, refNumbers) {
    let discrimination = "";
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      if (refNumbers.indexOf(userNumbers[i]) === i) {
        strikeCount = strikeCount + 1;
      } else if (refNumbers.includes(userNumbers[i])) {
        ballCount = ballCount + 1;
      }
    }

    discrimination =
      ballCount && strikeCount
        ? `${ballCount}볼 ${strikeCount}스트라이크`
        : (ballCount ? `${ballCount}볼` : "") +
            (strikeCount ? `${strikeCount}스트라이크` : "") || "낫싱";

    return discrimination;
  }

  reStartSelector() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === "1") {
          const refNumbersArr = this.refNumbersGetter();
          this.gameStarter(refNumbersArr);
        } else if (answer === "2") {
          MissionUtils.Console.close();
        }
      }
    );
  }

  errorChecker(usersInput) {
    for (const errorCheck in this.errorCheckList) {
      this.errorCheckList[errorCheck](usersInput);
    }
  }

  errorCheckList = {
    inputNumberLengthCheck: (usersInput) => {
      if (usersInput.length !== 3) {
        throw "3자리의 숫자를 입력해주세요.";
      }
    },
    inputValueStringCheck: (usersInput) => {
      if (isNaN(usersInput)) {
        throw "숫자만 입력해주세요";
      }
    },
  };

  gameStarter(refNumbersArr) {
    let discrimination = "";

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const usersInput = answer.trim();
      this.errorChecker(usersInput);
      const userNumbersArr = this.stringToArrConverter(usersInput);
      let discrimination = this.discriminator(userNumbersArr, refNumbersArr);
      this.printer(discrimination);

      if (discrimination !== "3스트라이크") {
        this.gameStarter(refNumbersArr);
      } else if (discrimination === "3스트라이크") {
        this.printer("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.reStartSelector();
      }
    });
  }

  play() {
    this.printer("숫자 야구 게임을 시작합니다.");
    const refNumbersArr = this.refNumbersGetter();
    this.gameStarter(refNumbersArr);
  }
}

const app = new App();
app.play();

module.exports = App;
