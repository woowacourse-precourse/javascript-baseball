const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let doRestart;
    do {
      doRestart = 2;

      this.start();
      MissionUtils.Console.readline("������ ���� �����Ϸ��� 1, �����Ϸ��� 2�� �Է��ϼ���.",(Restart)=>{
        doRestart = Restart;
      })
    } while (doRestart === '1');
    Console.close();
  }

  start(){
    let computerNumber;
    let status = 0;

    Console.print('���� �߱� ������ �����մϴ�.');
    computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    do {
      MissionUtils.Console.readline("���ڸ� �Է����ּ��� : ",(input)=>{
      let inputToInt=[];
      for(let c of input)
        inputToInt.push(parseInt(c));
      status = checkAnswer(inputToInt, computerNumber);
      })
    } while (status !== 0);
    console.print('3���� ���ڸ� ��� �����̽��ϴ�! ���� ����')
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
      ball+= checkBall(input[i],computerNumber);
    }
  if ( strike === 0 && ball === 0){
    console.print('����');
    return ;
  }
  if (ball > 0)
    console.print(ball+'�� ')
  if (strike > 0 )
    console.print(strike+'��Ʈ����ũ')
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

// const app = new App();
// app.play();

module.exports = App;
