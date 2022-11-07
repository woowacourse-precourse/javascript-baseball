class GameCalc{
  constructor(answerNum, inputNum){
    this.resultCnt = [0, 0]; //[strike, ball]
    this.answerNums = (answerNum+'').split('');
    this.inputNums = (inputNum+'').split('');
  }

  calcCountofStrike(){
    let cnt = 0;
    this.answerNums.map((value, idx) => {
      if (this.inputNums[idx] === value){
        cnt += 1;
      }
    })
    this.resultCnt[0] = cnt;
  }

  calcCountofBall(){
    let cnt = 0;
    this.answerNums.map((value, idx) => {
      if (this.inputNums[idx] !== value && this.inputNums.includes(value)){
        cnt += 1;
      }
    })
    this.resultCnt[1] = cnt;
  }

  totalCount(){
    this.calcCountofStrike();
    this.calcCountofBall();
    return this.resultCnt;
  }
  
}

module.exports = GameCalc;
