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
    const computerNum = this.computer.makeRandNum();
    this.getUserGuess(computerNum);
  }

  getUserGuess(computerNum) {
    Console.readLine(ALERT.INPUT_NUMBER, (userGuess) => {
      const isValid = this.user.isInputValid(userGuess);
      if(!isValid) {
        throw new Error(ALERT.INVALID_INPUT);
      }
      const [ballCnt, strCnt] = this.getGuessRst(userGuess, computerNum);
      const rstMsg = this.getRstMsg(ballCnt, strCnt);
      Console.print(rstMsg);

      if(strCnt === NUMBER.MAX_LENGTH){
        this.correctAns();
        this.askRestart();
      }
      if(strCnt !== NUMBER.MAX_LENGTH) this.getUserGuess(computerNum);
    })
  }

  correctAns() {
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

  getGuessRst(userGuess, computerNum) {
    const cNumArray = [...computerNum];
    const uNumArray = [...userGuess];
    let ballCnt = 0, strCnt = 0;
    for(let cnum of cNumArray) {
        const loc = cNumArray.indexOf(cnum);
        if(uNumArray.indexOf(cnum) === loc){
            strCnt++; continue;
        }
        if(uNumArray.includes(cnum)){
            ballCnt++;
        }
    }
    return [ballCnt, strCnt];
  }

  getRstMsg(ballCnt, strCnt) {
    if(ballCnt === 0 && strCnt === 0) return RESULT.NOTHING;
    if(ballCnt === 0) return strCnt+RESULT.STRIKE;
    if(strCnt === 0) return ballCnt+RESULT.BALL;

    return ballCnt+RESULT.BALL+' '+strCnt+RESULT.STRIKE;
  }
  
}

module.exports = App;
