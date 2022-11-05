class BaseballGamee {
  computerInput(){
    const MissionUtils = require("@woowacourse/mission-utils");

    let computerInput = [];
    computerInput = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    return computerInput;
  }
  

  play(){
    const MissionUtils = require("@woowacourse/mission-utils");
    let userInput = [];
    console.log("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine ('line : ', (answer) => {
      userInput = answer.toString().split('').map(e => e = parseInt(e));
      const isValid = this.checkUserInput(userInput);
      MissionUtils.Console.close();

    });

    

  }
}

module.exports = BaseballGamee;
