const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
class App {
  userNumber;
  computerNumber;

  getRandomNumber() {
    let computer_arr = [];
    while (computer_arr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_arr.includes(randomNumber)) {
        computer_arr.push(randomNumber);
      }
    }

    this.computerNumber = computer_arr.join('');
  }

  getUserNumber() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      const repeatInput = [...new Set(input)];
      if (
        input > 0 &&
        !input.includes(0) &&
        !isNaN(input) &&
        String(input).length === 3 &&
        repeatInput.length === 3
      ) {
        this.userNumber = input;
        this.compareNumbers(this.computerNumber, this.userNumber);
      } else {
        throw new Error('잘못된 입력입니다.');
      }
    });
  }

  compareNumbers(computerNumber, userNumber) {
    const computerList = this.computerNumber.split('');
    const userList = this.userNumber.split('');
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
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
        result += `${ball}볼 `;
      }
      if (strike > 0) {
        result += `${strike}스트라이크`;
      }
      if (strike === 3) {
        result = '3스트라이크';
      }
    }
    Console.print(result);

    if (result === '3스트라이크') {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restartGameCheck();
    } else {
      this.getUserNumber();
    }
  }

  restartGameCheck() {
    Console.readLine('게임을 재시작 하려면 1, 종료하려면 2를 입력하세요.', number => {
      if (Number(number) === 1) {
        this.gameStart();
      }
      if (Number(number) === 2) {
        Console.close();
      }
    });
  }

  gameStart() {
    this.getRandomNumber(); // computer number get
    this.getUserNumber(); //user nubmer get
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.gameStart();
  }
}

module.exports = App;
