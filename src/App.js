const MISSIONUTILS = require("@woowacourse/mission-utils");

class App {
  
  play() {
    MISSIONUTILS.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame(this.makeRandomNum());
  }
  
  makeRandomNum() {
    let com_num = [];
    while(com_num.length < 3){
      let num =  MISSIONUTILS.Random.pickNumberInRange(1,9);
      if(!com_num.includes(num))
        com_num.push(num);
    }
    return com_num;
  }
  
  reGame() {
    MISSIONUTILS.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (wantGame) => {
      if(wantGame === '1'){
        this.startGame(this.makeRandomNum());
      }else if(wantGame === '2'){
        return MISSIONUTILS.Console.close();
      }else throw '다시하기_ 잘못된 입력입니다.';
    })
  }

  startGame(RANDOM) {       
    MISSIONUTILS.Console.readLine('숫자를 입력해주세요', (user_num) => {
      let flag = this.checkNum(RANDOM,user_num);
      if(flag){
        MISSIONUTILS.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.reGame();
      }
    })
  }

  checkNum(RANDOM,num) {
    let bucketNum = [];
    if(num.length != 3) throw '숫자입력_ 범위 밖 입력';
    for(let i = 2; i >= 0; i--) {
      if(num % 10 === 0) throw '입력범위_ 0 입력';
      bucketNum[i] = num % 10;
      num = parseInt(num /10); 
    }
    if(this.duplicateCheck(bucketNum)) throw '숫자입력_ 중복 값 입력';
    let strike = [];
    let j = -1;
    for(let i = 0; i < bucketNum.length; i++) {
      if(bucketNum[i] === RANDOM[i]){
        strike[++j] = bucketNum[i];
      }
    }
    let ball = RANDOM.filter(x => bucketNum.includes(x)).filter(x => !strike.includes(x));
    this.print(strike.length, ball.length);
    if(strike.length === 3)
      return 1;
    else
      this.startGame(RANDOM);
  }
  
  duplicateCheck(bucketNum){
    const NUM_SET = new Set(bucketNum);
    if(NUM_SET.size != 3) return 1;
    return 0;
  }

  print(strike, ball) {
    if(ball != 0 && strike === 0){
      MISSIONUTILS.Console.print(`${ball}볼`);
    }else if(strike != 0 && ball === 0){
      MISSIONUTILS.Console.print(`${strike}스트라이크`);
    }else if(ball != 0 && strike != 0){
      MISSIONUTILS.Console.print(`${ball}볼 ${strike}스트라이크`);
    }else{
      MISSIONUTILS.Console.print('낫싱');
    }
  }
}
module.exports = App;
