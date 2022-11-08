const { Console, Random } = require("@woowacourse/mission-utils");
const { createPrinter } = require("typescript");
const {
  INPUT_ERROR_MESSAGE,
  RESTART_MESSAGE,
  BASE_MESSAGE,
  JUDGE_MESSAGE,
} = require("./constant");

class App {
  userInputErrorCheckList = {
    inputValueEmptyCheck: (usersInput) => {
      if (usersInput.indexOf(" ") !== -1) {
        throw INPUT_ERROR_MESSAGE.NO_EMPTY;
      }
    },
    inputNumberLengthCheck: (usersInput) => {
      if (usersInput.length !== 3) {
        throw INPUT_ERROR_MESSAGE.ONLY_THREE;
      }
    },
    inputValueStringCheck: (usersInput) => {
      if (isNaN(usersInput)) {
        throw INPUT_ERROR_MESSAGE.ONLY_NUMBER;
      }
    },
  };

  totalUserInputErrorChecker(usersInput) {
    for (const errorCheck in this.userInputErrorCheckList) {
      this.userInputErrorCheckList[errorCheck](usersInput);
    }
  }

  consolePrinter(message) {
    Console.print(message);
  }

  refNumbersArrayGetter() {
    let refNumbers = "";

    while (refNumbers.length < 3) {
      const targetNumber = Random.pickNumberInRange(1, 9);
      if (!refNumbers.includes(targetNumber)) {
        refNumbers = refNumbers + targetNumber;
      }
    }

    return refNumbers;
  }

  stringToNumberArrayConverter(numbersString) {
    const numbersStringArray = numbersString.split("");
    const numbersNumberArray = numbersStringArray.map((number) =>
      Number(number)
    );
    return numbersNumberArray;
  }

  strikeCounter(userNumbers, refNumbers) {
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      strikeCount =
        refNumbers[i] === userNumbers[i] ? strikeCount + 1 : strikeCount;
    }

    return strikeCount;
  }

  ballCounter(userNumbers, refNumbers) {
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      ballCount =
        refNumbers[i] !== userNumbers[i] && refNumbers.includes(userNumbers[i])
          ? ballCount + 1
          : ballCount;
    }

    return ballCount;
  }

  discriminator(strikeCount, ballCount) {
    let discrimination;

    if (ballCount === 0 && strikeCount === 0) {
      discrimination = JUDGE_MESSAGE.NOTHING;
    }
    if (ballCount !== 0 && strikeCount === 0) {
      discrimination = ballCount + JUDGE_MESSAGE.BALL;
    }
    if (ballCount === 0 && strikeCount !== 0) {
      discrimination = strikeCount + JUDGE_MESSAGE.STRIKE;
    }
    if (ballCount !== 0 && strikeCount !== 0) {
      discrimination = `${ballCount + JUDGE_MESSAGE.BALL} ${
        strikeCount + JUDGE_MESSAGE.STRIKE
      }`;
    }

    return discrimination;
  }

  reStartSelector() {
    Console.readLine(RESTART_MESSAGE.QUESTION, (answer) => {
      if (answer.trim() === "1") {
        const newRefNumbersArray = this.refNumbersArrayGetter();
        this.gameStarter(newRefNumbersArray);
      } else if (answer.trim() === "2") {
        Console.close();
      } else {
        throw RESTART_MESSAGE.ERROR;
      }
    });
  }

  gameStarter(refNumbersArray) {
    Console.readLine(BASE_MESSAGE.INPUT_REQUEST, (answer) => {
      const usersInput = answer.trim();
      this.totalUserInputErrorChecker(usersInput);
      const userNumbersArray = this.stringToNumberArrayConverter(usersInput);
      const strikeCount = this.strikeCounter(userNumbersArray, refNumbersArray);
      const ballCount = this.ballCounter(userNumbersArray, refNumbersArray);
      const discrimination = this.discriminator(strikeCount, ballCount);
      this.consolePrinter(discrimination);

      if (discrimination !== JUDGE_MESSAGE.THREE_STRIKE) {
        this.gameStarter(refNumbersArray);
      } else if (discrimination === JUDGE_MESSAGE.THREE_STRIKE) {
        this.consolePrinter(BASE_MESSAGE.END);
        this.reStartSelector();
      }
    });
  }

  play() {
    this.consolePrinter(BASE_MESSAGE.START);
    const refNumbersArray = this.refNumbersArrayGetter();
    this.gameStarter(refNumbersArray);
  }
}

module.exports = App;
