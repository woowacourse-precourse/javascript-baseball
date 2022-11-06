class BaseballGamee {
  
  computerInput(){
    const MissionUtils = require("@woowacourse/mission-utils");

    let computerInput = [];
    computerInput = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    return computerInput;
  }

  checkUserInput(userInput){
    const isValidArr = userInput.map(e => e=Number.isNaN(e));
    if(userInput.length!==3) return false;
    if(isValidArr.includes(true)) return false;
    if(new Set(userInput).size!==3) return false;
    if(userInput.includes(0)) return false;
  }


  userInput(){
    const MissionUtils = require("@woowacourse/mission-utils");
    let userInput = [];
    MissionUtils.Console.readLine ('line : ', (answer) => {
      userInput = answer.toString().split('').map(e => e = parseInt(e));
      const isValid = this.checkUserInput(userInput);
      
      if(isValid==false){
        throw "잘못된 값을 입력했습니다.";
      }
    });
    return userInput;
  }

  

  play(){
    
    console.log("숫자 야구 게임을 시작합니다.");
    
    const userInput = this.userInput();
  }
}

module.exports = BaseballGamee;
