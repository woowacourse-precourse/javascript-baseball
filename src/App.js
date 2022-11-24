/* eslint-disable class-methods-use-this */
const {Console} = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const Game = require('./Game');
const {parseEndSelect, EndSelect} = require('./utils/EndSelect');
const runGenerator = require('./utils/runGenerator');
const Gong = require('./models/Gong');

class App {
  play() {
    Console.print(Messages.GAME_START);
    runGenerator(this.#run.bind(this));
  }

  *#run() {
    const game = new Game();

    while (true) {
      const gong = yield this.#readGong;
      const success = game.guess(gong);
      if (success) break;
    }

    Console.print(Messages.END_SELECT);
    const endSelect = yield this.#readEndSelect;

    if (endSelect === EndSelect.SHUTDOWN) {
      this.#shutdown();
      return;
    }

    yield* this.#run(); // 게임 계속 실행
  }

  #readGong(callback) {
    Console.readLine(Messages.INPUT_YOUR_GONG, (text) => {
      callback(Gong.parseGong(text));
    });
  }

  #readEndSelect(callback) {
    Console.readLine('', (text) => {
      callback(parseEndSelect(text));
    });
  }

  #shutdown() {
    Console.close();
  }
}

module.exports = App;
