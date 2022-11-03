class BaseballGame {
  computerInput(){
    const MissionUtils = require("@woowacourse/mission-utils");

    let computerInput = [];
    computerInput = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    return computerInput;
  }


  play(){
    
  }
}

module.exports = BaseballGame;
