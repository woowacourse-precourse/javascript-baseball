const { Console } = require('@woowacourse/mission-utils');
const { gameStart, generateRandomNumbers } = require('./gameStart');
const GameData = require('./GameData');

class App {
  play() {
    const gameData = new GameData();
    Console.print('숫자 야구 게임을 시작합니다.');
    gameStart(generateRandomNumbers(gameData));
  }
}

const app = new App();
app.play();

module.exports = App;
