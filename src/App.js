const { Random, Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constant/message.js");

class isValidUserInput {
  constructor(userInput) {
    this._userInput = userInput;
  }

  checkLength() {
    return this._userInput.length === 3;
  }

  checkRange() {
    return (
      1 <= Math.min(...this._userInput) && Math.max(...this._userInput) <= 9
    );
  }

  checkDuplicate() {
    const setLength = new Set(this._userInput).length;
    return setLength === 3;
  }

  checkAllUserInput() {
    return this.checkLength() && this.checkRange() && this.checkDuplicate();
  }
}

class App {
  constructor() {
    this.print(MESSAGE.GAME_START);
    this.userinput = this.readInput();
  }

  print(message) {
    return Console.print(message);
  }

  pickNumbers() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  // readInput() {
  //   return new Promise((resolve) => {
  //     Console.readLine("숫자를 입력해주세요 : ", (answer) => {
  //       this.userInput = [...answer];
  //       resolve();
  //     });
  //   });
  // }
  readInput() {
    Console.readLine(MESSAGE.USER_INPUT_REQUEST, (userinput) => {
      Console.close();
    });
  }
  inGame() {
    this.readInput();
    Console.print("asdfasdf");
    const inputError = new isValidUserInput(this.userinput);
    if (!inputError.checkAllUserInput) return -1;
  }

  play() {
    this.startGame();
    this.inGame();
    // await this.leadInput();

    // while (1) {
    //   switch (coin) {
    //     case "1":
    //       break;
    //     case "2":
    //       break;
    //     default:
    //       this.print("잘못입력하셨습니다. 새로시작 : 1 , 종료 : 2");
    //       break;
    //   }
    //   console.log(123);
    // }
    return;
  }
}

const app = new App();
app.play();

module.exports = App;
