const { Console, Random } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');
const { Referee } = require('./Referee');
const validateInputMap = require('./utils');

class App {
  user = new User();
  computer = new Computer();
  referee = new Referee();
  userChoiceMap = {
    "1": () => {
      this.play();
    },
    "2": () => {
      Console.close();
      return;
    },
  };

  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.initialize();
    this.match();
  }

  initialize() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.computer.numbers = numbers.map(String);
  }

  match() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.user.numbers = input.split('');
      validateInputMap['INGAME_VALIDATE'](this.user.numbers);

      console.log('정답: ', this.computer.numbers);
      console.log('입력: ', this.user.numbers);

      this.referee
        .judge(this.computer.numbers, this.user.numbers)
        .printScore();

      if (this.referee.strike === 3) {
        this.isRegame();
      }

      this.match();
    });
  }

  isRegame() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        validateInputMap['OUTGAME_VALIDATE'](input);
        this.userChoiceMap[input]();
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
