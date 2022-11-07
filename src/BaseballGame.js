const MissionUtils = require('@woowacourse/mission-utils');
const Validation = require('./Validation');
const {
  Console,
  THREE,
  PLZ_NUMBER_INPUT,
  STRIKE,
  BALL,
  MISSION_COMPLETE,
  GAME_RESTART,
} = require('./Constant');
class BaseballGame {
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
      Validation.userNumberIsValid(input);
      console.log(this.computerNumber);
      this.userNumber = input;
      this.compareNumbers(this.computerNumber, this.userNumber);
    });
  }

  compareNumbers(computerNumber, userNumber) {
    const computerList = this.computerNumber.split('');
    const userList = this.userNumber.split('');
    let strike = 0;
    let ball = 0;

    computerList.map(x => {
      if (computerList.indexOf(x) === userList.indexOf(x)) {
        strike += 1;
      } else if (userList.includes(x)) {
        ball += 1;
      }
    });

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

  constructor() {
    this.gameStart();
  }
}

module.exports = BaseballGame;
