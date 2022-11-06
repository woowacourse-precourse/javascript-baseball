const MissionUtils = require("@woowacourse/mission-utils");
class App {
  
  play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const CONTINUE =  1; 
    while(CONTINUE === 1){
      CONTINUE = this.startGame();
      if(CONTINUE != 0){
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (FLAG) => {
        this.CONTINUE = FLAG;
        //MissionUtils.Console.close();
      })
    }
    }
  }
  startGame(){
    const RAMDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.readLine('숫자를 입력해주세요', (user_num) => {
      const = this.checkNum(user_num)
      if(){
         MissionUtils.Console.close();
      }
    })
  }
  checkNum(num){

  }
  
}
const app = new App();
app.play();
module.exports = App;
