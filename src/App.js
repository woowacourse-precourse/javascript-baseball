import * as MissionUtils from '@woowacourse/mission-utils';

class App {
  play() {
    const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    let userAnswer;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer)=> {
      userAnswer = answer.split('').map((num)=>{return Number(num)});
    });
  }

}




module.exports = App;
