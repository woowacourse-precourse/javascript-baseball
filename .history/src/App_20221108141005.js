const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let doRestart;
    do {
      doRestart = 2;

      start();
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
      //���̸� 0, �� �ƴϸ� 1
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
