const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let doRestart;
    do {
      doRestart = 2;
      try {
        this.start();
      } catch (error) {
        MissionUtils.Console.print(error);
        MissionUtils.Console.close();
      }
      MissionUtils.Console.readline("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
    MissionUtils.Console.close();
  }

  start(){
    let computerNumber;
    let status = 0;

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(input)=>{
      if(this.checkArgument(input))
        throw '잘못된 입력입니다.'
      let inputToInt=[];
      for(let c of input)
        inputToInt.push(parseInt(c));
      status = this.checkAnswer(inputToInt, computerNumber);
      })
    } while (status !== 0);
    MissionUtils.console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  }

  checkArgument(input){
    const numStr = "0123456789";
    let   checkNum = new Array(10);
    if(input.length != 3)
      return true;
    for(let i = 0;i<3;i++){
      if(!numStr.includes(input[i]) || checkNum.indexOf(input[i]) != -1)
        return true;
      checkNum.push(input[i]);
    }
    return false;
  }

  checkAnswer(input, computerNumber){
    let flag = 1;
    let strike = 0;
    let ball = 0;
    for(let i = 0;i < 3;i++){
      if(input[i]===computerNumber[i]){
        strike++;
        continue;
      }
      ball+= this.checkBall(input[i],computerNumber);
    }
  if ( strike === 0 && ball === 0){
    MissionUtils.Console.print('낫싱');
    return ;
  }
  if (ball > 0)
  MissionUtils.Console.print(ball+'볼 ')
  if (strike > 0 )
  MissionUtils.Console.print(strike+'스트라이크')
  if (strike === 3)
    flag = 1;
  }

  checkBall(inputNum, computerNumber){

    for(let i = 0;i<3;i++)
      if(inputNum === computerNumber[i])
        return 1;

    return 0;
  }
}

module.exports = App;
