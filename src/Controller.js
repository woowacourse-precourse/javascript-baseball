const MissionUtils = require('@woowacourse/mission-utils');
const constant = require('./Constants');
const GameCalc = require('./model/Game');
const randomNum = require('./model/Random');
const answerPhase = require('./utils/AnswerPhase');
const Validation = require('./utils/validation');
const ExceptionCheck = require('./utils/Exception');

class GameControl{
  constructor(){
    this.gamecount = 0;
    this.error = new ExceptionCheck();
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
      this.validation.checkErrorofInput(input, 0);
      this.printGameResult(input);
    });
  }

  printGameResult(input){
    if (this.validation.isThreeStrike(this.resultForInput(input))){
      this.checkForNeedRestart();
    }
    else{
      MissionUtils.Console.print(answerPhase(this.resultForInput(input)));
      this.userInput();
    }
  }

  resultForInput(number){
    const game = new GameCalc(this.answerNum, number);
    const resultOfStrikeAndBalls = game.totalCount();
    return resultOfStrikeAndBalls;
  }
  
  restartGame(input){  
    if (String(input) === '1'){
      this.startGame();
    }
    else if (String(input) === '2'){
      MissionUtils.Console.close();
    }
  }

  checkForNeedRestart(){
    MissionUtils.Console.readLine(constant.GAME.RESTART+'\n', (input) => {
      this.validation.checkErrorofInput(input, 1);
      this.restartGame(input);
    });
  }
}

module.exports = GameControl;
