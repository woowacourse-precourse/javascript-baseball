const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, RESTART, EXIT } = require('./Constant');
const User = require('./Components/User');
const Computer = require('./Components/Computer');
const FindAnswer = require('./Utilities/FindAnswer');

const { Console } = MissionUtils;

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.findAnswer = new FindAnswer();
  }

  play() {
    Console.print(MESSAGE.START);
    const computerNum = this.computer.createComputerNum();
    this.start(computerNum);
  }

  start(computerNum) {
    Console.readLine(MESSAGE.USERINPUT, (userInput) => {
      if (!this.user.isValidUserInput(userInput)) {
        this.isError();
      }
      Console.print(`${MESSAGE.USERINPUT}${userInput}`);

      const { strike } = this.findAnswer.getAnswer(computerNum, userInput);
      if (strike !== 3) {
        return this.start(computerNum);
      }

      return this.askUserToRestart();
    });
  }

  isRestart() {
    this.play();
  }

  isExit() {
    Console.close();
  }

  isError() {
    throw new Error(MESSAGE.ERROR);
  }

  askUserToRestart() {
    Console.print(`${MESSAGE.GAMEEND}\n${MESSAGE.ASKTORESTART}`);
    Console.readLine(MESSAGE.ASKTORESTART, (userInput) => {
      if (userInput === RESTART) {
        Console.print(userInput);
        this.isRestart();
        return;
      }
      if (userInput === EXIT) {
        Console.print(userInput);
        this.isExit();
      } else {
        this.isError();
      }
    });
  }
}

module.exports = App;
