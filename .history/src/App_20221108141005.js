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
      //답이면 0, 답 아니면 1
      let inputToInt=[];
      for(let c of input)
        inputToInt.push(parseInt(c));
      status = checkAnswer(inputToInt, computerNumber);
      })
    } while (status !== 0);
  }

  checkAnswer(input, computerNumber){

    for(let i = 0; i < 3;i++)
    {
      if(input[i]!==computerNumber[i]){
        printStatus(input, computerNumber);
        return 1;
      }
    }
    return 0;
  }
}

module.exports = App;
