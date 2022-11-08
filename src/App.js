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
    if(gameTool.isValidateNumber(input) === false) throw new Error('입력이 잘못되었습니다.')
  }
}

const app = new App();
app.play();

module.exports = App;