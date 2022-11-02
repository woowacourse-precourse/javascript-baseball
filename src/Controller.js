const MissionUtils = require("@woowacourse/mission-utils");
const constant = require('./Constants');
const GameCalc = require('./model/Game');

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
    const game = new GameCalc(this.answerNum, number);
    const resultList = game.totalCount();
    return resultList;
  }

  restartCheck(){
    return new Promise(resolve => {
      MissionUtils.Console.readLine(constant.GAME.RESTART+'\n', (number) => resolve(number))
    });
  }
}

module.exports = GameControl;