const { Console } = require('@woowacourse/mission-utils');
const { GAME_SENTENCE } = require('./constants');

class App {
  constructor() {}

  play() {}
}

const app = new App();

// 문장 출력
Console.print(GAME_SENTENCE.OPENING);

Console.readLine(GAME_SENTENCE.INPUT, (input) => {});

module.exports = App;
