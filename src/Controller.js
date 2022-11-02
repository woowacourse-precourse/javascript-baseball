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

  printAnswer(resultList){
    if (resultList[0] === 0 && resultList[1] === 0){
      return constant.RESULTS.NOTHING;
    }
    else if (resultList[0] === 0 && resultList[1] !== 0){
      return String(resultList[1])+constant.RESULTS.BALL;
    }
    else if (resultList[0] === 1 && resultList[1] === 0){
      return String(resultList[0])+constant.RESULTS.STRIKE;
    }
    return String(resultList[1])+constant.RESULTS.BALL+' '+String(resultList[0])+constant.RESULTS.STRIKE;
  }
}

module.exports = GameControl;