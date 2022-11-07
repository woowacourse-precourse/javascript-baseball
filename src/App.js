const MissionUtils = require('@woowacourse/mission-utils');
const messages = require('./Constants.js');
class App {
  constructor() {
    this.userNumber = '';
    this.computerNumber = '';
    this.isGameRestart = true;
  }

  play() {
    this.printGameStartMessage();
    this.init();
    this.gameStart();
  }

  init() {
    this.createComputerNumber();
    this.isGameFinished = false;
  }

  printGameStartMessage() {
    MissionUtils.Console.print(messages.GAME_START_MESSAGE);
  }

  createComputerNumber() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
  }

  gameStart() {
    MissionUtils.Console.readLine(messages.ENTER_USER_NUMBER_MESSAGE, (input) => {
      this.getUserNumber(input);
      if (!this.isValidUserNumber(this.userNumber)) {
        throw new Error(messages.USER_NUMBER_ERROR_MESSAGE);
      }
      MissionUtils.Console.print(this.printCountResult(this.computerNumber, this.userNumber));
      if (!this.isGameFinished) this.gameStart();
    });
  }

  getUserNumber(input) {
    this.userNumber = input;
  }

  isValidUserNumber(number) {
    return this.isThreeDigits(number) && this.isCorrectRangeDigits(number) && this.isNotDuplicate;
  }

  isThreeDigits(number) {
    return number.length === 3;
  }

  isCorrectRangeDigits(number) {
    const possibleDigits = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 9);
    number.split('').forEach((digit) => {
      if (!possibleDigits.includes(+digit)) return false;
    });
    return true;
  }

  isNotDuplicate(number) {
    const possibleDigits = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 9);
    let usedDigits = [];
    number.split('').forEach((digit) => {
      if (usedDigits.includes(+digit)) {
        return false;
      } else {
        usedDigits.push(+digit);
      }
    });
    return true;
  }

  getNumberOfBalls(computerNumber, userNumber) {
    let numberOfBalls = 0;
    computerNumber.split('').forEach((digit, idx) => {
      if (userNumber.includes(digit) && computerNumber[idx] !== userNumber[idx]) numberOfBalls += 1;
    });
    return numberOfBalls;
  }

  getNumberOfStrikes(computerNumber, userNumber) {
    let numberOfStrikes = 0;
    computerNumber.split('').forEach((digit, idx) => {
      if (userNumber.includes(digit) && computerNumber[idx] === userNumber[idx])
        numberOfStrikes += 1;
    });
    return numberOfStrikes;
  }

  printCountResult(computerNumber, userNumber) {
    let numberOfBalls = this.getNumberOfBalls(computerNumber, userNumber);
    let numberOfStrikes = this.getNumberOfStrikes(computerNumber, userNumber);

    if (numberOfBalls === 0 && numberOfStrikes === 0) return messages.NONE_MATCHING_MESSAGE;
    if (numberOfBalls === 0) {
      if (numberOfStrikes === 3) {
        this.isGameFinished = true;
        return `${numberOfStrikes}스트라이크\n` + messages.GAME_FINISH_MESSAGE;
      }

      return `${numberOfStrikes}스트라이크`;
    } else {
      if (numberOfStrikes === 0) return `${numberOfBalls}볼`;
      return `${numberOfBalls}볼 ${numberOfStrikes}스트라이크`;
      ㅑ;
    }
  }
}
const app = new App();
app.play();

module.exports = App;
