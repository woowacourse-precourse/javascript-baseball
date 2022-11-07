const MissionUtils = require('@woowacourse/mission-utils');

class App {

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerNum();
  }

  makeComputerNum() {
    const random_num = [];
    while(random_num.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1,9);
        if(random_num.includes(number)) continue;
        random_num.push(number);        
    }
  }

}

module.exports = App;