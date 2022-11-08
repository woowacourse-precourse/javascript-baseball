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
    let checkAnswer;
    let status = 0;

    Console.print('숫자 야구 게임을 시작합니다.');
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readline("숫자를 입력해주세요 : ",(input)=>{
      //정답 맞으면 0 낫싱이면 1 모두 아니면 2
      status = check_answer(input);
    })
    } while (status !== 0);
  }
}

module.exports = App;
