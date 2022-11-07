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
