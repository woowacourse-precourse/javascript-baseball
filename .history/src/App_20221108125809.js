const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    do {
      let doRestart = 2;
      start();
      MissionUtils.Console.readline("������ ���� �����Ϸ��� 1, �����Ϸ��� 2�� �Է��ϼ���.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
  }
  start(){
    let computerNumber;
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
  }
}

module.exports = App;
