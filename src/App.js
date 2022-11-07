const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const RANDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(RANDOM); // 콘솔
    let continueGame = this.startGame(RANDOM);
    // if(continueGame != 0) {
    //    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (reStart) => {
    //     console.log('12312');
    //     continueGame = reStart;
    //     MissionUtils.Console.close();
    // })
    //}
  }
  
  startGame(RANDOM){ 
        
    MissionUtils.Console.readLine('숫자를 입력해주세요', (user_num) => {
      let flag = this.checkNum(RANDOM,user_num);
      if(flag){
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.close();
      }
    })
  }

  checkNum(RANDOM,num) {
    let bucketNum = [];
    for(let i = 2; i >= 0; i--){
      bucketNum[i] = num % 10;
      num = parseInt(num /10); 
    }
    let strike = [];
    let j = -1;
    console.log(bucketNum); // 콘솔
    for(let i = 0; i < bucketNum.length; i++){
      if(bucketNum[i] === RANDOM[i]){
        strike[++j] = bucketNum[i];
      }
    }
    console.log(strike); // 콘솔
    let ball = RANDOM.filter(x => bucketNum.includes(x)).filter(x => !strike.includes(x));
    this.print(strike.length, ball.length);

    if(strike.length === 3)
      return 1;
    else
      this.startGame(RANDOM);
  }

  print(strike, ball){
    if(ball != 0 && strike === 0){
      MissionUtils.Console.print(`${ball}볼`);
    }else if(strike != 0 && ball === 0){
      MissionUtils.Console.print(`${strike}스트라이크`);
    }else if(ball != 0 && strike != 0){
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }else{
      MissionUtils.Console.print('낫싱');
    }
  }
  
}
const app = new App();
app.play();
module.exports = App;
