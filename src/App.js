const { Console, Random } = require("@woowacourse/mission-utils");

const GAME_START_SENTENCE = '숫자 야구 게임을 시작합니다.';
const GET_USER_NUMBER_SENTENCE = '숫자를 입력해주세요 : ';
const GAME_END_SENTENCE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_RESTART_SENTENCE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
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

      Console.print(this.computerNumber);
      Console.print(this.userNumber);

      this.compareNumbers(this.computerNumber, this.userNumber);
    });
  }

  compareNumbers(computerNumber, userNumber) {
    let [ball, strike] = [0, 0];

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike++;
      } else if (userNumber.includes(computerNumber[i])) {
        ball++;
      }
    }

    this.setHint(ball, strike);
    if (strike === 3) {
      Console.print('정답');
      Console.close();
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

  play() {
    this.getComputerNumber();
    this.getUserNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
