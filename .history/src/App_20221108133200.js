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

  start(){
    let computerNumber;
    let status = 0;

    Console.print('숫자 야구 게임을 시작합니다.');
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readline("숫자를 입력해주세요 : ",(input)=>{
      status = check_answer(input, computerNumber);
      })
    } while (status !== 0);
  }
}

module.exports = App;
