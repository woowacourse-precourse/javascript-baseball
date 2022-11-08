import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  setting(){
    const COMPUTER = [];
    const PLAYER = [];
    while(COMPUTER.length < 3){
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!COMPUTER.includes(NUMBER))
            COMPUTER.push(NUMBER);
    }
  }
}

module.exports = App;