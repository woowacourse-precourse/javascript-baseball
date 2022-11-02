class GameCalc{
  constructor(answerNum, inputNum){
    this.resultCnt = [0, 0]; //[strike, ball]
    this.answerNum = (answerNum+'').split('');
    this.inputNum = (inputNum+'').split('');
  }

  strikeCount(){
    let cnt = 0;
    this.answerNum.map((value, idx) => {
      if (this.inputNum[idx] === value){
        cnt += 1;
      }
    })
    this.resultCnt[0] = cnt;
  }

  ballCount(){
    let cnt = 0;
    this.answerNum.map((value, idx) => {
      if (this.inputNum[idx] !== value && this.inputNum.includes(value)){
        cnt += 1;
      }
    })
    this.resultCnt[1] = cnt;
  }

  totalCount(){
    this.strikeCount();
    this.ballCount();
    return this.resultCnt;
  }
  
}

module.exports = GameCalc;
