const { Console, Random } = require("@woowacourse/mission-utils");

class RandomSelectNumbersByComputer {
  randomSelectComputerNumbers() {
    const selectedNumber = Random.pickUniqueNumbersInRange(1, 9, 3);

    return selectedNumber;
  }
}

module.exports = RandomSelectNumbersByComputer;

class ValidateUserInput {
  inputNumbers() {
    Console.readLine("숫자를 입력해주세요 : ", this.validateUserInput);
  }

  validateUserInput(userInput) {
    Console.print(userInput);
  }
}

class BaseballGame {
  constructor() {
    this.computerNumbers =
      new RandomSelectNumbersByComputer().randomSelectComputerNumbers();
    this.validateUserInput = new ValidateUserInput();
  }

  playGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.print(this.computerNumbers);
    this.validateUserInput.inputNumbers();
    Console.close();
  }

}

module.exports = BaseballGame;

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.playGame();
  }

  // async startGame() {
  //   Console.print("숫자 야구 게임을 시작합니다.");
  //   await this.baseballGameStart();
  //   const computerNumbers = await this.randomSelectComputerNumbers();

  //   Console.close();
  // }

  // async baseballGameStart() {
  //   const beforeValidNumbers = await inputNumbers("숫자를 입력해주세요 : ");
  //   if (!validateNumbers(beforeValidNumbers)) Console.close();
  //   Console.print('Valid Input');
  // }

  // randomSelectComputerNumbers() {
  //   const computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  //   return computerNumbers;
  // }

  // validateNumbers(beforeValidNumbers) {
  //   return (
  //     typeof beforeValidNumbers !== 'string' ||
  //     beforeValidNumbers.length !== 3
  //   ) ? false : true;
  // }
}

module.exports = App;

function check() {
  const app = new App();

  app.play();
  return 0;
}

check();