const MissionUtils = require("@woowacourse/mission-utils");
const constant = require('./Constants');
const GameCalc = require('./model/Game');
const randomNum = require('./model/Random');
const printAnswer = require('./model/Print');
const Validation = require('./utils/validation');
const Exception = require('./model/Exception');

class GameControl{
  constructor(){
    this.gamecount = 0;
    this.error = new Exception();
    this.validation = new Validation();
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
      this.validation.checkInput(input, 0);
      this.result(input);
    });
  }

  

  result(input){
    if (this.validation.checkSuccess(this.userOutput(input))){
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

  
  restartGame(input){  
    if (String(input) === '1'){
      this.startGame();
    }
    else if (String(input) === '2'){
      MissionUtils.Console.close();
    }
  }

  restartCheck(){
    MissionUtils.Console.readLine(constant.GAME.RESTART+'\n', (input) => {
      this.validation.checkInput(input, 1);
      this.restartGame(input);
    });
  }
}

module.exports = GameControl;
