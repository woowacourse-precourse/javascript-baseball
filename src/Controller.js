const MissionUtils = require("@woowacourse/mission-utils");
const constant = require('./Constants');

class GameControl{
  constructor(answerNum){
    this.answerNum = answerNum;
  }

  userInput(){
    const input = new Promise(resolve => {
      MissionUtils.Console.readLine(constant.GAME.INPUT, (number) => resolve(number))
    });
    return input; 
  }

  userOutput(number){
    
  }
}

module.exports = GameControl;