const MissionUtils = require("@woowacourse/mission-utils");

class App {
  userInputErrorCheckList = {
    inputNumberLengthCheck: (usersInput) => {
      if (usersInput.length !== 3) {
        throw "3자리의 숫자를 입력해주세요.";
      }
    },
    inputValueStringCheck: (usersInput) => {
      if (isNaN(usersInput)) {
        throw "숫자만 입력해주세요.";
      }
    },
    inputValueEmptyCheck: (usersInput) => {
      if (usersInput.indexOf(" ") !== -1) {
        throw "입력값 사이에 빈칸이 없도록 입력해주세요.";
      }
    },
  };

  totalUserInputErrorChecker(usersInput) {
    for (const errorCheck in this.userInputErrorCheckList) {
      this.userInputErrorCheckList[errorCheck](usersInput);
    }
  }

  consolePrinter(message) {
    MissionUtils.Console.print(message);
  }

  refNumbersArrayGetter() {
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

  strikeCounter = (userNumbersArray, refNumbersArray) => {
    let strikeCount = 0;

    userNumbersArray.map((userNumber, index) => {
      strikeCount =
        userNumber === refNumbersArray[index] ? strikeCount + 1 : strikeCount;
    });

    return strikeCount;
  };

  ballCounter = (userNumbersArray, refNumbersArray) => {
    let ballCount = 0;

    userNumbersArray.map((userNumber, index) => {
      ballCount =
        refNumbersArray.indexOf(userNumber) !== index &&
        refNumbersArray.includes(userNumber)
          ? ballCount + 1
          : ballCount;
    });

    return ballCount;
  };

  discriminator(userNumbersArray, refNumbersArray) {
    const strikeCount = this.strikeCounter(userNumbersArray, refNumbersArray);
    const ballCount = this.ballCounter(userNumbersArray, refNumbersArray);

    const discrimination =
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
          const refNumbersArray = this.refNumbersArrayGetter();
          this.gameStarter(refNumbersArray);
        } else if (answer === "2") {
          MissionUtils.Console.close();
        }
      }
    );
  }

  gameStarter(refNumbersArray) {
    let discrimination = "";

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const usersInput = answer.trim();
      this.totalUserInputErrorChecker(usersInput);
      const userNumbersArray = this.stringToArrConverter(usersInput);
      let discrimination = this.discriminator(
        userNumbersArray,
        refNumbersArray
      );
      this.consolePrinter(discrimination);

      if (discrimination !== "3스트라이크") {
        this.gameStarter(refNumbersArray);
      } else if (discrimination === "3스트라이크") {
        this.consolePrinter("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.reStartSelector();
      }
    });
  }

  play() {
    this.consolePrinter("숫자 야구 게임을 시작합니다.");
    const refNumbersArray = this.refNumbersArrayGetter();
    this.gameStarter(refNumbersArray);
  }
}

const app = new App();
app.play();

module.exports = App;
