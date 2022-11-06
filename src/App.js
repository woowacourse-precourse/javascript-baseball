const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("../const/Printexplain.js")
class App {
  constructor(){
    MissionUtils.Console.print(Notice.START_GAME)
    this.AnswerNumber = this.generateRandomnumber()
  }
  play() {
    this.start()
  }
  start(){
    MissionUtils.Console.readLine(Notice.INPUT_NUM,(input) => {
      this.exceptionThrow(input)
      const Strike = this.caculateStrike(this.AnswerNumber,input)
      const Ball = this.cacluateBall(this.AnswerNumber,input)
      this.gameResult(Strike,Ball)
    });
  }
  generateRandomnumber(){
    const Randomnumber = [];
    while (Randomnumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!Randomnumber.includes(number)) {
        Randomnumber.push(number);
        }
      }
      return [...Randomnumber].join("");
  };
  exceptionThrow(num){
    if (num.length !=3){
      throw Notice.THROW_NOTICE
    }
    else if(num.match(/0/)){
      throw Notice.THROW_NOTICE
    }
    else if (num.match(/D/)){
      throw Notice.THROW_NOTICE
    }
    else if (new Set(num).size!=3){
      throw Notice.THROW_NOTICE
    }
    return true
  }
  caculateStrike(computernum, inputnum){
    let strikeCnt = 0;
    const arrcomputernum = [...computernum]
    const arrinputnum = [...inputnum]
    arrcomputernum.forEach((arrcomputernum, idx) => {
      if (arrcomputernum === arrinputnum[idx]) {
        strikeCnt += 1;
      }
    });
    return strikeCnt;
  }
  cacluateBall(computernum, inputnum){
    let ballCnt = 0;
    const arrcomputernum = [...computernum]
    const arrinputnum = [...inputnum]
    arrcomputernum.forEach((arrcomputernum, idx) => {
      if (
        arrcomputernum !== arrinputnum[idx] &&
        arrinputnum.includes(arrcomputernum)
      ) {
        ballCnt += 1;
      }
    });
  
    return ballCnt;
  }
  gameResult(strike,ball){
    if (strike == 3){
      MissionUtils.Console.print(`${strike}스트라이크`)
      MissionUtils.Console.print(Notice.STRIKEOUT)
      this.gameFinish()
    }
    else if (strike == 0 && ball == 0) {
      MissionUtils.Console.print("낫싱")
      this.start()
    }
    else if (strike == 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`)
      this.start()
    }
    else if (strike > 0 && ball == 0) {
      MissionUtils.Console.print(`${strike}스트라이크`)
      this.start()
    }
    else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
      this.start()
    }
  }
  gameFinish(){
    MissionUtils.Console.readLine(Notice.SELECTMODE,(input)=>{
      this.Restart(input)
    })
  }
  Restart(mode){
    let num = parseInt(mode)
    if (num == 1){
      this.AnswerNumber = this.generateRandomnumber()
      this.start()
    }
    else if(num == 2){
      MissionUtils.Console.close()
    }
  }
}
const app = new App();
app.play();
module.exports = App;
