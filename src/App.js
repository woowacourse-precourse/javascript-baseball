const MissionUtils = require("@woowacourse/mission-utils");

class App {
  
  play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const CONTINUE =  1; 
    while(CONTINUE === 1) {
      CONTINUE = this.startGame();
      if(CONTINUE != 0) {
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (CONTINUE) => {
        this.CONTINUE = CONTINUE;
        MissionUtils.Console.close();
      })
    }
    }
  }
  startGame() {
    const RAMDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.readLine('숫자를 입력해주세요', (user_num) => {
      const FLAG = this.checkNum(RAMDOM,user_num)
     
      if(FLAG === -1) {
        return 0;
      }
      if(FLAG) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.close();
      }
    })
    return 1;
  }
  checkNum(RANDOM,num) {

  }
  
}
const app = new App();
app.play();
module.exports = App;
