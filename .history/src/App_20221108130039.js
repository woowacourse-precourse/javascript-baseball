const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    do {
      let doRestart = 2;
      start();
      MissionUtils.Console.readline("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
  }
  start(){
    let computerNumber;
    let checkAnswer;
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readline("숫자를 입력해주세요 : ",(input)=>{
      doRestart = Restart;
    })
    } while ();


  }
}

module.exports = App;
