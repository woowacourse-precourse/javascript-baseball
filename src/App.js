const {Console} = require('@woowacourse/mission-utils');
const Messages = require('./messages');
const Game = require('./game');
const {parseEndSelect, EndSelect} = require('./constants');

class App {
  // eslint-disable-next-line class-methods-use-this
  play() {
    Console.print(Messages.GAME_START);
    this.#startGame();
  }

  #startGame() {
    const game = new Game();
    game.onEnd(() => this.#onGameEnd());
    game.play();
  }

  // eslint-disable-next-line class-methods-use-this
  #onGameEnd() {
    Console.print(Messages.END_SELECT);
    Console.readLine('', (text) => {
      const endSelect = parseEndSelect(text);
      if (endSelect === EndSelect.RETRY) {
        this.#startGame();
      } else if (endSelect === EndSelect.SHUTDOWN) {
        this.#shutdown();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  #shutdown() {
    Console.close();
  }
}

module.exports = App;
