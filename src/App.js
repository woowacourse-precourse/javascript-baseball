const MissionUtils = require('@woowacourse/mission-utils');
const InputValidation = require('./utils/InputValidation');
const CompareNumber = require('./utils/CompareNumber');

let computerNumber;
class App {
  constructor() {
    this.InputValidation = new InputValidation();
    this.printGreeting();
  }

  printGreeting() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    let randomNumSet = new Set();
    while (true) {
      randomNumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
      if (randomNumSet.size === 3) {
        break;
      }
    }
    computerNumber = Array.from(randomNumSet);
    this.getUserNumber();
  }

  getUserNumber() {
    let userNumber = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (this.InputValidation.isValidInput(answer)) {
        userNumber = answer.split('').map(Number);
        this.printResult(userNumber);
      }
    });
  }

  printResult(userNumber) {
    const [strike, ball] = CompareNumber(computerNumber, userNumber);

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    }

    if (strike > 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }

    if (ball > 0 && strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }

    if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    this.isCorrect(strike);
  }

  isCorrect(strike) {
    if (strike === 3) {
      console.log('정답!');
    } else {
      this.getUserNumber();
    }
  }
}

new App();

module.exports = App;
