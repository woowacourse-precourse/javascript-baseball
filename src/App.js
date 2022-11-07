const { Console, Random } = require("@woowacourse/mission-utils");

const GAME_START_SENTENCE = '숫자 야구 게임을 시작합니다.';
const GET_USER_NUMBER_SENTENCE = '숫자를 입력해주세요 : ';
const GAME_END_SENTENCE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_RESTART_SENTENCE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';

class App {
  constructor() {
    this.computerNumber;
    this.userNumber;
  }

  getComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    this.computerNumber = computerNumber;
  }

  getUserNumber() {
    Console.readLine(GET_USER_NUMBER_SENTENCE, (userNumber) => {
      this.userNumber = userNumber.split('').map(Number);
      
      this.validateUserNumber();
      this.compareNumbers();
    });
  }

  validateUserNumber() {
    if (this.userNumber.length !== 3) {
      throw new Error('입력이 3자리수가 아닙니다.');
    }

    if (
      this.userNumber[0] === this.userNumber[1]
      || this.userNumber[1] === this.userNumber[2]
      || this.userNumber[0] === this.userNumber[2]
    ) {
      throw new Error('입력에 중복된 수가 있습니다.');
    }

    const strUserNumber = this.userNumber.join('');
    const regex = /^[0-9]+$/;
    if (!regex.test(strUserNumber)) {
      throw new Error('입력이 숫자가 아닙니다.');
    }
  }

  compareNumbers() {
    let [ball, strike] = [0, 0];

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === this.userNumber[i]) {
        strike++;
      } else if (this.userNumber.includes(this.computerNumber[i])) {
        ball++;
      }
    }

    this.setHint(ball, strike);

    if (strike === 3) {
      this.askRestart();
    } else {
      this.getUserNumber();
    }
  }

  setHint(ball, strike) {
    if (strike === 3) {
      Console.print('3스트라이크');
    }else if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    } else if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball > 0 && strike > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else {
      Console.print(`${strike}스트라이크`);
    }
  }

  askRestart() {
    Console.print(GAME_END_SENTENCE);
    Console.readLine(GAME_RESTART_SENTENCE, (answer) => {
      if (answer === '1') {
        this.play();
      } else {
        Console.close();
      }
    });
  }

  play() {
    Console.print(GAME_START_SENTENCE);

    this.getComputerNumber();
    this.getUserNumber();
  }
}

module.exports = App;