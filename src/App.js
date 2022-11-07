const { Console } = require('@woowacourse/mission-utils');
const User = require('./User.js')
const Computer = require('./Computer.js')

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {

  }

  startGame() {
    const computerNum = this.computer.makeRandNum();
    this.getUserGuess(computerNum);
  }

  getUserGuess(computerNum) {
    Console.readLine("숫자를 입력해주세요 : ", (userGuess) => {
      const [ballCnt, strCnt] = this.getGuessRst(userGuess, computerNum);
      const rstMsg = this.getRstMsg(ballCnt, strCnt);
      Console.print(rstMsg);

      if(strCnt === 3) this.askRestart();
      if(strCnt !== 3) this.getUserGuess;
    })
  }

  exitGame() {
    Console.print("게임을 종료합니다.");
    Console.close();
  }

  askRestart() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (isRestart) => {
      if(isRestart === "1"){
        return this.startGame();
      }
      if(isRestart === "2") {
        return this.exitGame();
      }
      throw new Error("올바른 입력이 아닙니다. 프로그램을 종료합니다.");
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
    if(ballCnt === 0 && strCnt === 0) return '낫싱';
    if(ballCnt === 0) return strCnt+'스트라이크';
    if(strCnt === 0) return ballCnt+'볼';

    return ballCnt+'볼 '+strCnt+'스트라이크';
  }
  
}

module.exports = App;
