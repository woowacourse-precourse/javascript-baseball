const { Console } = require('@woowacourse/mission-utils');
const GameUtil = require('./GameUtil');

class App extends GameUtil {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.randoms = super.generateRandomNumbers();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    Console.readLine('숫자를 입력해주세요 : ', (playerInput) => {
      this.validateInput(playerInput);
    });
  }

  validateInput(playerInput) {
    const result = super.validateInput(playerInput);
    if (result === 'PASS') return this.printHint(playerInput);

    throw new Error(result);
  }

  printHint(playerInput) {
    const ball = super.countBall(this.randoms, playerInput);
    const strike = super.countStrike(this.randoms, playerInput);

    if (strike === 3) return this.correctAnswer();

    Console.print(super.showHint(ball, strike));
    return this.play();
  }

  correctAnswer() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (decision) => {
        switch (Number(decision)) {
        case 1:
          return this.restart();
        case 2:
          return this.terminate();
        default:
          return this.correctAnswer();
        }
      },
    );
  }

  restart() {
    this.randoms = super.generateRandomNumbers();
    this.play();
  }

  static terminate() {
    Console.print('게임 종료');
    Console.close();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
