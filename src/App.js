const MissionUtils = require('@woowacourse/mission-utils');
const Game = require('./Game.js');

const PROGRESS = 0;
const END = 1;

class App {
  #numberSize;

  #currentGame;

  constructor(numberSize = 3) {
    this.#numberSize = numberSize;
    this.#currentGame = null;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    const computer = this.makeRandomNumber();
    const game = new Game(computer);
    this.setCurrentGame(game);
    this.progressGame(game);
  }

  makeRandomNumber(len = this.getNumberSize()) {
    const computer = [];
    while (computer.length < len) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  progressGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.checkInputValid(number, PROGRESS);
      const game = this.getCurrentGame();
      game.setUserNumber(number);
      const gameResult = game.compareNumbers();
      game.printCompareResult();
      if (gameResult[0] === 0 && gameResult[1] === this.getNumberSize()) {
        this.finishGame();
        return;
      }

      this.progressGame();
    });
  }

  checkInputValid(input, type) {
    if (type === PROGRESS && input.length !== this.getNumberSize()) {
      throw new Error('user number length error');
    }

    if (type === END && input.length !== 1) {
      throw new Error('user command length error');
    }

    if ([...input].length !== new Set([...input]).size) {
      throw new Error('input duplicated error');
    }

    if (Number.isNaN(input)) {
      throw new Error('input is not number error');
    }

    if (input.includes('0')) {
      throw new Error('input includes 0 error');
    }
  }

  finishGame() {
    MissionUtils.Console.print(
      `${this.getNumberSize()}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ',
      (number) => {
        if (number === '1') {
          this.play();
          return;
        }
        this.closeApp();
      }
    );
  }

  closeApp() {
    MissionUtils.Console.close();
  }

  setNumberSize(size) {
    this.#numberSize = size;
  }

  getNumberSize() {
    return this.#numberSize;
  }

  setCurrentGame(game) {
    this.#currentGame = game;
  }

  getCurrentGame() {
    return this.#currentGame;
  }
}

const app = new App();
app.play();

module.exports = App;
