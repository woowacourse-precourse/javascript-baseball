/* eslint-disable import/extensions */
const { startGame } = require('./modules/startGame');
const { playBaseballGame } = require('./modules/playBaseballGame');

class App {
  play() {
    startGame();
    playBaseballGame();
  }
}

module.exports = App;
