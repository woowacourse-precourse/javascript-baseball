const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let continueGame = this.startGame();
    if(continueGame != 0) {
       MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (reStart) => {
        console.log('12312');
        continueGame = reStart;
        MissionUtils.Console.close();
    })
    }
  }
  
  startGame() {
    const RAMDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(RAMDOM);
    let user;
    MissionUtils.Console.readLine('숫자를 입력해주세요', (user_num) => {
      user = user_num;
      let flag = this.checkNum(RAMDOM,user);
      if(flag === -1) {
        return 0;
      }
      else if(flag === 0){
        return 1;
      }
      else if(flag) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return 1;
      }
      MissionUtils.Console.close();
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
    console.log(bucketNum);
    for(let i = 0; i < bucketNum.length; i++){
      if(bucketNum[i] === RANDOM[i]){
        strike[++j] = bucketNum[i];
      }
    }
    console.log(strike);
    let ball = RANDOM.filter(x => bucketNum.includes(x)).filter(x => !strike.includes(x));
    this.print(strike.length, ball.length);
    if(strike.length === 3)
      return 1;
    return 0;
  }
  
  
}
const app = new App();
app.play();
module.exports = App;
