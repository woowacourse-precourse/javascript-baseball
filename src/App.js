const { Console } = require('@woowacourse/mission-utils');
const User = require('./User.js');
const Computer = require('./Computer.js');
const { NUMBER, RESULT, ALERT, STRING } = require('./Const.js');

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    Console.print(ALERT.START);
    this.startGame();
  }

  startGame() {
    const computerNum = this.computer.makeRandomNum();
    this.getUserGuess(computerNum);
  }

  getUserGuess(computerNum) {
    Console.readLine(ALERT.INPUT_NUMBER, (userGuess) => {
      const isValid = this.user.isInputValid(userGuess);
      if(!isValid) {
        throw new Error(ALERT.INVALID_INPUT);
      }
      const [ballCount, strikeCount] = this.getGuessRst(userGuess, computerNum);
      const resultMessage = this.getRstMsg(ballCount, strikeCount);
      Console.print(resultMessage);

      if(strikeCount === NUMBER.MAX_LENGTH){
        this.correctAnswer();
        this.askRestart();
      }
      if(strikeCount !== NUMBER.MAX_LENGTH) this.getUserGuess(computerNum);
    })
  }

  correctAnswer() {
    Console.print(ALERT.CORRECT_ANSWER);
  }
  
  exitGame() {
    Console.print(ALERT.EXIT_GAME);
    Console.close();
  }

  askRestart() {
    Console.print(ALERT.RESTART_GAME);
    Console.readLine("", (isRestart) => {
      if(isRestart === STRING.RESTART_TRUE){
        return this.startGame();
      }
      if(isRestart === STRING.RESTART_FALSE) {
        return this.exitGame();
      }
      throw new Error(ALERT.INVALID_INPUT);
    })
  }

  getGuessRst(userGuess, computerNumber) {
    const computerNumToArray = [...computerNumber];
    const userNumToArray = [...userGuess];
    let ballCount = 0, strikeCount = 0;
    for(let computerNumElement of computerNumToArray) {
        const loc = computerNumToArray.indexOf(computerNumElement);
        if(userNumToArray.indexOf(computerNumElement) === loc){
            strikeCount++; continue;
        }
        if(userNumToArray.includes(computerNumElement)){
            ballCount++;
        }
    }
    return [ballCount, strikeCount];
  }

  getRstMsg(ballCount, strikeCount) {
    if(ballCount === 0 && strikeCount === 0) return RESULT.NOTHING;
    if(ballCount === 0) return strikeCount+RESULT.STRIKE;
    if(strikeCount === 0) return ballCount+RESULT.BALL;

    return ballCount+RESULT.BALL+' '+strikeCount+RESULT.STRIKE;
  }
  
}

module.exports = App;
