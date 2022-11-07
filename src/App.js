const MissionUtils = require('@woowacourse/mission-utils');
const {
  Console,
  THREE,
  GAME_START_TEXT,
  PLZ_NUMBER_INPUT,
  ERROR_TEXT,
  STRIKE,
  BALL,
  MISSION_COMPLETE,
  GAME_RESTART,
} = require('./Constant');
class App {
  userNumber;
  computerNumber;

  getRandomNumber() {
    let computerArr = [];
    while (computerArr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(randomNumber)) {
        computerArr.push(randomNumber);
      }
    }

    this.computerNumber = computerArr.join('');
  }

  getUserNumber() {
    Console.readLine(PLZ_NUMBER_INPUT, input => {
      this.userNumberIsValid(input);
      console.log(this.computerNumber);
      this.userNumber = input;
      this.compareNumbers(this.computerNumber, this.userNumber);
    });
  }

  userNumberIsValid(input) {
    const repeatInput = [...new Set(input)];
    if (
      input < 0 ||
      input.includes(0) ||
      isNaN(input) ||
      String(input).length !== THREE ||
      repeatInput.length !== THREE
    ) {
      throw new Error(ERROR_TEXT);
    } else return;
  }

  compareNumbers(computerNumber, userNumber) {
    const computerList = this.computerNumber.split('');
    const userList = this.userNumber.split('');
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < THREE; i++) {
      if (computerList.indexOf(userList[i]) === i) {
        strike += 1;
      } else if (computerList.includes(userList[i])) {
        ball += 1;
      }
    }
    this.displayResult(strike, ball);
  }

  displayResult(strike, ball) {
    let result = '';

    if (strike === 0 && ball === 0) {
      result = '낫싱';
    } else {
      if (ball > 0) {
        result += `${ball}${BALL} `;
      }
      if (strike > 0) {
        result += `${strike}${STRIKE}`;
      }
      if (strike === THREE) {
        result = `3${STRIKE}`;
      }
    }
    Console.print(result);

    if (result === `3${STRIKE}`) {
      Console.print(MISSION_COMPLETE);
      this.restartGameCheck();
    } else {
      this.getUserNumber();
    }
  }

  restartGameCheck() {
    Console.readLine(GAME_RESTART, number => {
      if (Number(number) === 1) {
        this.gameStart();
      }
      if (Number(number) === 2) {
        Console.close();
      }
    });
  }

  gameStart() {
    this.getRandomNumber();
    this.getUserNumber();
  }

  play() {
    Console.print(GAME_START_TEXT);
    this.gameStart();
  }
}

module.exports = App;
