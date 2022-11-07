const MissionUtils = require("@woowacourse/mission-utils");

class App{
  play() { 

    //컴퓨터 랜덤 숫자 정하기
    const comNum = [];
    while (comNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!comNum.includes(number)) {
        comNum.push(number);
      }
    }
    MissionUtils.Console.print(comNum);
    
 
  }
}


module.exports = App;
