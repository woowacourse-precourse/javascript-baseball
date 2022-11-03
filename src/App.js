const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer;
    this.strToArr = function (str) {
      return str.split('');
    };
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();
  }

  initUserInputInterface() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateInput(input);
      this.compareUserInputAndComputer(input);
    });
  }

  validateInput(input) {
    if (input.length !== 3) {
      throw '올바른 입력 값이 아닙니다. 3자리 숫자가 아닙니다. 게임을 종료합니다.';
    }

    const set = new Set(this.strToArr(input));
    if (input.length !== set.size) {
      throw '올바른 입력 값이 아닙니다. 중복된 숫자가 존재합니다. 게임을 종료합니다.';
    }
  }

  compareUserInputAndComputer(input) {
    if (this.answer === input) {
      return this.printRestartPhrase();
    }

    const [ball, strike] = this.countStrikeAndBall(input);
    this.printStrikeAndBall(ball, strike);
    this.initUserInputInterface();
  }

  countStrikeAndBall(input) {
    let ball = 0;
    let strike = 0;
    this.strToArr(input).forEach((element, index) => {
      if (element === this.answer[index]) {
        strike++;
      }
      if (element !== this.answer[index] && this.answer.includes(element)) {
        ball++;
      }
    });

    return [ball, strike];
  }

  printStrikeAndBall(ball, strike) {
    let result = '';
    if (!ball && !strike) {
      result = '낫싱';
    }

    if (ball) {
      result += `${ball}볼 `;
    }

    if (strike) {
      result += `${strike}스트라이크`;
    }

    Console.print(result);
  }

  init() {
    this.generateRandomNumber();
    this.initUserInputInterface();
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    this.answer = computer.join('');
  }

  printAnswerAndRestartPhrase() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자롤 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (input) => {
      if (input === '1') {
        this.startGame();
        return;
      }

      if (input === '2') {
        return;
      }

      Console.print('올바른 숫자가 아닙니다.');
    });
  }
}

const app = new App();
app.play();

module.exports = App;
