const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let doRestart;
    do {
      doRestart = 2;

      start();
      MissionUtils.Console.readline("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
    Console.close();
  }


}

module.exports = App;
