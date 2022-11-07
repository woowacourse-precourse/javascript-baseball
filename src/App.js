const MissionUtils = require('@woowacourse/mission-utils');
const messages = require('./Constants.js');
class App {
  constructor() {
    this.userNumber = '';
    this.computerNumber = '';
  }

  play() {
    this.printGameStartMessage();
    this.init();
    this.playGame();
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

  playGame() {
    MissionUtils.Console.readLine(messages.ENTER_USER_NUMBER_MESSAGE, (input) => {
      this.getUserNumber(input);
      if (!this.isValidUserNumber(this.userNumber)) {
        throw new Error(messages.USER_NUMBER_ERROR_MESSAGE);
      }
      MissionUtils.Console.print(this.getCountResult(this.computerNumber, this.userNumber));

      if (!this.isGameFinished) this.playGame();

      MissionUtils.Console.readLine(messages.ENTER_GAME_RESART_NUMBER_MESSAGE, (input) => {
        let restartNumber = +input;
        if (restartNumber !== 1 && restartNumber !== 2)
          throw new Error(messages.GAME_RESTART_NUMBER_ERROR_MESSAGE);
        if (restartNumber === 1) {
          this.isGameFinished = false;
          this.init();
          this.playGame();
        } else {
          MissionUtils.Console.close();
        }
      });
    });
  }

  getUserNumber(input) {
    this.userNumber = input;
  }

  isValidUserNumber(number) {
    return (
      this.isThreeDigits(number) && this.isCorrectRangeDigits(number) && this.isNotDuplicate(number)
    );
  }

  isThreeDigits(number) {
    return number.split('').filter((digit) => !isNaN(Number(digit))).length === 3;
  }

  isCorrectRangeDigits(number) {
    const possibleDigits = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 9);
    return number.split('').filter((digit) => possibleDigits.includes(+digit)).length === 3;
  }

  isNotDuplicate(number) {
    let usedDigits = [];
    number.split('').forEach((digit) => {
      if (!usedDigits.includes(+digit)) {
        usedDigits.push(+digit);
      }
    });
    return usedDigits.length === 3;
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

  getCountResult(computerNumber, userNumber) {
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
    }
  }

  print;
}
const app = new App();
app.play();

module.exports = App;
