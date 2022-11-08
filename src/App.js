const { Console } = require("@woowacourse/mission-utils");
const { NUM_SIZE, KEY, MESSAGE, ERROR } = require('./Constants');
const { computerInput } = require('./ComputerInput');

class App {

  constructor() {
    this.computerInputNums='';
    this.userInputNums = '';
  }

  play(){
    Console.print(MESSAGE.START);
    this.startGame();
  }

  startGame(){
    this.computerInputNums = computerInput();
    this.userInput();
  }


  userInput(){
    return Console.readLine(MESSAGE.INPUT,(input) => {
      this.checkUserInput(input);
      this.getResult(input);
      Console.close();
      })
  }

  checkUserInput(userInput){
    if(userInput.length!==NUM_SIZE) throw new Error(ERROR.LENGTH);
    if(new Set(userInput).size!==NUM_SIZE) throw new Error(ERROR.UNIQUE);
    if(userInput.includes(0)) throw new Error(ERROR.RANGE);
  }


  askRestartOrQuit(){
    Console.print(MESSAGE.RESTART);
    Console.readLine('', (answer) => {
      if(answer === KEY.RESTART) return this.startGame();
      if(answer === KEY.QUIT) return Console.print(MESSAGE.QUIT);
    })
  }


  getResult(userInput){
    this.userInputNums = userInput;

    const {ballCount, strikeCount} = this.getBallAndStrike();
    this.printHint(ballCount, strikeCount);

    return this.userInput();
  }

  getBallAndStrike(){
    let strikeCount = 0
    let ballCount = 0;

    let subtractArr = this.computerInputNums.map((x,y) => x-this.userInputNums[y]);
    let zeroCount = subtractArr.filter(element => 0 === element).length;

    let intersect = this.computerInputNums.filter(x => this.userInputNums.includes(x));

    strikeCount = zeroCount;
    ballCount = intersect.length - strikeCount;

    return {ballCount, strikeCount};
  }

  printHint(ballCount, strikeCount){
    if(ballCount !== 0 && strikeCount !==0) Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    if(ballCount !== 0 && strikeCount === 0) Console.print(`${ballCount}볼`);
    if(ballCount === 0 && strikeCount !== 0) Console.print(`${strikeCount}스트라이크`);

    if(strikeCount == NUM_SIZE){
      Console.print(MESSAGE.THREE_STRIKE);
      Console.print(MESSAGE.SUCCESS);

      return this.askRestartOrQuit();
    }
    if(ballCount === 0 && strikeCount === 0) Console.print("낫싱");
  }
}

const app = new App();
app.play();

module.exports = App;
