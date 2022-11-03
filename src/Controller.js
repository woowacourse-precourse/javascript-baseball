const MissionUtils = require("@woowacourse/mission-utils");
const constant = require('./Constants');
const GameCalc = require('./model/Game');
const randomNum = require('./model/Random');
const printAnswer = require('./model/Print');

const Exception = require("./model/Exception.js");

class GameControl{
  constructor(){
    this.gamecount = 0;
    this.error = new Exception();
    this.answerNum;
  }

  startGame(){
    let answer = randomNum();
    this.answerNum = answer;
    this.gamecount += 1;
    if (this.gamecount === 1){
      MissionUtils.Console.print(constant.GAME.START);
    }
    this.userInput();
  }

  userInput(){
    MissionUtils.Console.readLine(constant.GAME.INPUT, (input) => {
      this.checkInput(input, 0);
      this.result(input);
    });
  }

  checkInput(input, startOrrestart){
    if (startOrrestart === 0){
      if(this.error.inputError(input) != false){
        throw new Error(this.error.inputError(input));
      }
    }
    if (startOrrestart === 1){
      if (this.error.restartError(String(input)) != false){
        throw new Error(this.error.restartError(String(input)));
      }
    }
  }

  result(input){
    if (this.checkSuccess(this.userOutput(input))){
      this.restartCheck();
    }
    else{
      MissionUtils.Console.print(printAnswer(this.userOutput(input)));
      this.userInput();
    }
  }

  userOutput(number){
    const game = new GameCalc(this.answerNum, number);
    const resultList = game.totalCount();
    return resultList;
  }

  restartCheck(){
    MissionUtils.Console.readLine(constant.GAME.RESTART+'\n', (input) => {
      this.checkInput(input, 1);
      this.restartGame(input);
    });
  }

  checkSuccess(resultarray){
    if (resultarray[0] === 3){
      MissionUtils.Console.print(constant.GAME.ANSWER);
      MissionUtils.Console.print(constant.GAME.ANSWER_NEXT);
      return true;
    }
  }

  restartGame(input){  
    if (String(input) === '1'){
      this.startGame();
    }
    else if (String(input) === '2'){
      MissionUtils.Console.close();
    }
  }
}

module.exports = GameControl;
