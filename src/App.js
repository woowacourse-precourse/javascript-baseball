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

  play() {
    Console.print(GAME_START_TEXT);
    this.gameStart();
  }

  /** gameStart()를 따로 메소드로 뺀 이유는 재시작할 때, "숫자 야구 게임을 시작합니다."라는 문구를 요구사항 예시에 맞게 제외하고 시작하기 위해  */
  gameStart() {
    this.getRandomNumber();
    this.getUserNumber();
  }

  getRandomNumber() {
    let computerNumberArr = [];
    while (computerNumberArr.length < THREE) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumberArr.includes(randomNumber)) {
        computerNumberArr.push(randomNumber);
      }
    }
    this.computerNumber = computerNumberArr.join('');
  }

  getUserNumber() {
    Console.readLine(PLZ_NUMBER_INPUT, input => {
      this.userNumberIsValid(input);
      this.userNumber = input;
      this.compareNumbers(this.computerNumber, this.userNumber);
    });
  }

  // 사용자 수가 옳은 입력인지 확인
  userNumberIsValid(input) {
    const duplicateRemoveArr = [...new Set(input)];
    if (
      input < 0 ||
      input.includes(0) ||
      isNaN(input) ||
      String(input).length !== THREE ||
      duplicateRemoveArr.length !== THREE
    ) {
      throw new Error(ERROR_TEXT);
    } else return;
  }

  compareNumbers(computerNumber, userNumber) {
    const computerNumberList = this.computerNumber.split('');
    const userNumberList = this.userNumber.split('');
    let strike = 0;
    let ball = 0;

    computerNumberList.map(x => {
      if (computerNumberList.indexOf(x) === userNumberList.indexOf(x)) {
        strike += 1;
      } else if (userNumberList.includes(x)) {
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
    Console.readLine(GAME_RESTART, option => {
      if (Number(option) === 1) {
        this.gameStart();
      }
      if (Number(option) === 2) {
        Console.close();
      }
    });
  }
}

module.exports = App;
