const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');
const gameTool = require('./GameTool');

class App {
  constructor() {
    this.answer = [];
  } 
  play() {
    Console.print(MESSAGES.START);
    this.start();
  }
  async start() {
    this.answer = gameTool.generateRandomNumber();
    const input = await gameTool.inputNumber();
  }
}

const app = new App();
app.play();

module.exports = App;