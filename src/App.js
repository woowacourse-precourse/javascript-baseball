const { Console } = require('@woowacourse/mission-utils');
const GameUtil = require('./GameUtil');

class App extends GameUtil{
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
    if (result === 'PASS') return this.rightInput(playerInput);

    throw new Error(result);  
  }

  rightInput(playerInput) {   
    const ball = super.countBall(this.randoms, playerInput);
    const strike = super.countStrike(this.randoms, playerInput);

    this.printHint(ball, strike);
  }

  printHint(ball, strike) {
    if (strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this.correctAnswer();
    }

    Console.print(super.showHint(ball, strike));
    this.play();
  }

  correctAnswer() { 
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (decision) => {
      switch (Number(decision)) {
        case 1:
          return this.restart();
        case 2:
          return this.terminate();
        default:
          return this.correctAnswer();
      };
    });
  }

  restart() {
    this.randoms = super.generateRandomNumbers();
    this.play();
  }

  terminate() {
    Console.print('게임 종료');
    Console.close();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
