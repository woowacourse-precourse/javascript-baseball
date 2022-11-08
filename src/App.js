const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');
const gameTool = require('./GameTool');

class App {
  constructor() {
    this.answer = '';
  } 
  play() {
    Console.print(MESSAGES.START);
    this.ready();
  }
  ready() {
    this.answer = gameTool.generateRandomNumber();
    this.start();
  }
  start() {
    Console.readLine(MESSAGES.INPUT, this.continue);
  }
  continue = (input) => {
    if(gameTool.isValidateNumber(input) === false){
      throw new Error('입력이 잘못되었습니다.');
    }
    const { strike, ball } = gameTool.checkBaseballCount(this.answer, input);
    gameTool.printBaseballCount(strike, ball);
    
    if(strike === 3){
      this.end();
    } else {
      this.start();
    }
  }
  end() {
    console.log('끝');
  }
}

const app = new App();
app.play();

module.exports = App;