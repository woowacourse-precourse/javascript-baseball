const MissionUtils = require("@woowacourse/mission-utils");
class App {
  initRandom(){
    const computer = [];
    while(computer.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }
  validateNumber(input){
    if(input.length!=3){
      throw new Error("3자리 숫자를 입력하세요");
    }
    for(let val=0; val<input.length; val++){
      if(isNaN(input[val])){
        throw new Error("3자리 숫자를 입력하세요");
      }
    }
  }
  countHint(computer,guess){
    let strikeCnt = 0;
    let ballCnt = 0;
    for(let idx=0; idx<3; idx++){
      if(computer[idx]==guess[idx]){
        strikeCnt+=1;
      }
    }
    for(let comIdx=0; comIdx<computer.length; comIdx++){
      let computerNum = computer[comIdx];
      for(let guessIdx=0; guessIdx<guess.length; guessIdx++){
        let guessNum = guess[guessIdx];
        if(computerNum == guessNum && comIdx != guessIdx){
          ballCnt+=1;
        }
      }
    }
    return [strikeCnt, ballCnt];
  }
  hintMessage(strikeCnt,ballCnt){
    let strikeAns = strikeCnt + "스트라이크";
    let ballAns = ballCnt + "볼";
    let hint;
    if(strikeCnt!=0 && ballCnt==0){
      hint = strikeAns;
    }else if(strikeCnt==0 && ballCnt!=0){
      hint = ballAns;
    }else if(strikeCnt!=0 && ballCnt!=0){
      hint = ballAns+ " "+strikeAns;
    }else if(strikeCnt==0 && ballCnt==0){
      hint = "낫싱";
    }
    MissionUtils.Console.print(hint);
  }
  restart(){
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    MissionUtils.Console.readLine('', (input) => {
      if(input==1){
        this.startGame();
      }
    });
  }
  provideHint(computer, guess, MissionUtils){
    const cnt = this.countHint(computer,guess)
    const strikeCnt = cnt[0];
    const ballCnt = cnt[1];

    this.hintMessage(strikeCnt,ballCnt);

    if(strikeCnt == 3){
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restart();
    }else{
      this.guessNumber(computer);
    }
  }
  
  guessNumber(computer){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateNumber(input);
      this.provideHint(computer,input.split('').map((num)=>Number(num)));
    });
  }
  startGame(){
    const computer = this.initRandom();
    this.guessNumber(computer);
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
}
module.exports = App;
