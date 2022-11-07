const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');
const gameTool = require('./GameTool');

class App {
  constructor() {
    this.answer = [];
  } 
  play() {
    Console.print(MESSAGES.START);
    this.start
  }
  start() {
    this.answer = gameTool.generateRandomNumber();
  }
}

const app = new App();
app.play();

module.exports = App;