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
      MissionUtils.Console.readline("������ ���� �����Ϸ��� 1, �����Ϸ��� 2�� �Է��ϼ���.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
    MissionUtils.Console.close();
  }

  start(){
    let computerNumber;
    let status = 0;

    MissionUtils.Console.print('���� �߱� ������ �����մϴ�.');
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readLine('���ڸ� �Է����ּ��� : ',(input)=>{
      if(this.checkArgument(input))
        throw '�߸��� �Է��Դϴ�.'
      let inputToInt=[];
      for(let c of input)
        inputToInt.push(parseInt(c));
      status = this.checkAnswer(inputToInt, computerNumber);
      })
    } while (status !== 0);
    MissionUtils.console.print('3���� ���ڸ� ��� �����̽��ϴ�! ���� ����')
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
    MissionUtils.Console.print('����');
    return ;
  }
  if (ball > 0)
  MissionUtils.Console.print(ball+'�� ')
  if (strike > 0 )
  MissionUtils.Console.print(strike+'��Ʈ����ũ')
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
