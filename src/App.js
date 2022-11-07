const MissionUtils = require('@woowacourse/mission-utils');
const { RANGE, NEW_GAME_CONSTANT, GAME_MESSAGE, ERROR_MESSAGE, RESULT } = require('./Constants');

class App {
  constructor() {
    this.RANGE = RANGE;
    this.NEW_GAME_CONSTANT = NEW_GAME_CONSTANT;
    this.GAME_MESSAGE = GAME_MESSAGE;
    this.ERROR_MESSAGE = ERROR_MESSAGE;
    this.RESULT = RESULT;
  }

  play() {
    const computerRandomNumber = this.getComputerNumber();
    MissionUtils.Console.print(this.GAME_MESSAGE.INIT_MESSAGE);
    this.baseballGame(computerRandomNumber);
  }

  getComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < this.RANGE.LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
  
    return computerNumber;
  }

  baseballGame(computerRandomNumber) {
    MissionUtils.Console.readLine(this.GAME_MESSAGE.USER_INPUT, (input) => {
      if (!this.validUserInput(input)) {
        throw new Error(this.ERROR_MESSAGE.USER_INPUT_ERROR);
      }

      const userInputNumber = this.strToIntArr(input);
      const gameResult = this.getResult(computerRandomNumber, userInputNumber);
      const isWin = this.winOrLose(gameResult);

      if (isWin) {
        MissionUtils.Console.print(this.GAME_MESSAGE.GAME_FINISHED);
        this.newGame();
      }
      this.baseballGame(computerRandomNumber);
    })
  }

  validUserInput(str) {
    const reg = /^[0-9]+$/;

    const userInputSet = new Set(str);

    return str.length == this.RANGE.LENGTH && reg.test(str) && str.length == userInputSet.size;
  }

  strToIntArr(str) {
    const strArr = [...str];
    const intArr = [];
  
    strArr.forEach((item) => intArr.push(parseInt(item)));
  
    return intArr;
  }

  getResult(comArr, userArr) {
    let resultArr = [0, 0]; // resultArr[0] = Ball, resultArr[1] = Strike
    for (let i = 0; i < comArr.length; i++) {
      if (comArr[i] == userArr[i]) {
        resultArr[1] += 1;
      }
  
      if (comArr.includes(userArr[i]) && comArr[i] != userArr[i]) {
        resultArr[0] += 1;
      }
    }
  
    return resultArr;
  }

  winOrLose(resultArr) {
    if (resultArr[0] == 0 && resultArr[1] == 0) {
      MissionUtils.Console.print(this.RESULT.NOTHING);
      return false;
    }
    else if (resultArr[0] == 0 && resultArr[1] != 0) {
      MissionUtils.Console.print(`${resultArr[1]}${this.RESULT.STRIKE}`);
      if (resultArr[1] == this.RANGE.LENGTH) {
        return true;
      }
      return false;
    }
    else if (resultArr[1] == 0 && resultArr[0] != 0) {
      MissionUtils.Console.print(`${resultArr[0]}${this.RESULT.BALL}`);
      return false;
    }
    else {
      MissionUtils.Console.print(`${resultArr[0]}${this.RESULT.BALL} ${resultArr[1]}${this.RESULT.STRIKE}`);
      return false;
    }
  }

  newGame() {
    MissionUtils.Console.print(this.GAME_MESSAGE.NEW_GAME);
    MissionUtils.Console.readLine('', (input) => {
      if (input == this.NEW_GAME_CONSTANT.FINISH) {
        return MissionUtils.Console.close();
      }
      else if (input == this.NEW_GAME_CONSTANT.RESTART) {
        const computerRandomNumber = this.getComputerNumber();
        this.baseballGame(computerRandomNumber);
      }
      else {
        throw new Error(this.ERROR_MESSAGE.USER_INPUT_ERROR);
      }
    })
  }
}

const app = new App()
app.play()

module.exports = App;
