const { Console, Random } = require("@woowacourse/mission-utils");

const MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESULTGAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  ERROR: "유효하지 않은 값입니다. 게임이 종료됩니다.",
};

const RESULT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const RESULTGAME = {
  RESTART: "1",
  CLOSE: "2",
};

class App {
  isDuplicated = (str) => {
    return str.length !== new Set(str).size;
  };

  inputValidation = (str) => {
    if (
      !Number.isInteger(Number(str)) ||
      str.length !== 3 ||
      str.includes(0) ||
      this.isDuplicated(str)
    ) {
      throw new Error(MESSAGE.ERROR);
    }
  };

  computerRandomInput = () => {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join("");
  };

  printResult = (userInput, computerInput) => {
    let strike = 0;
    let ball = 0;
    let nothing = true;

    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput.includes(userInput[i])) {
        nothing = false;
        if (userInput[i] === computerInput[i]) {
          strike++;
        } else {
          ball++;
        }
      }
    }

    if (nothing) {
      return Console.print(RESULT.NOTHING);
    }

    let result = "";

    if (ball) result += `${ball}${RESULT.BALL} `;
    if (strike) result += `${strike}${RESULT.STRIKE}`;

    Console.print(result);
    strike === 3 && this.successResult();
  };

  successResult = () => {
    Console.print(MESSAGE.SUCCESS);

    Console.readLine(MESSAGE.RESULTGAME, (input) => {
      if (input === RESULTGAME.RESTART) {
        this.play();
      } else if (input === RESULTGAME.CLOSE) {
        Console.close();
      } else {
        throw new Error(MESSAGE.ERROR);
      }
    });
  };

  userInputCompared = (computerInput) => {
    Console.readLine(MESSAGE.INPUT_NUMBER, (userInput) => {
      this.inputValidation(userInput);
      this.printResult(userInput, computerInput);
      this.userInputCompared(computerInput);
    });
  };

  play = () => {
    Console.print(MESSAGE.START);
    this.userInputCompared(this.computerRandomInput());
  };
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
