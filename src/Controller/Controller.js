const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const BaseballMaker = require('../Model/BaseballMaker');
const BaseballGame = require('../Model/BaseballGame');
const IsvalidNumber = require('../util/IsValidNumber');

class Controller {
  #uniqueNumberList
  #SUCCESS
  #RETRY
  #EXIT

  constructor(){
    this.#uniqueNumberList;
    this.isvalidNumber = new IsvalidNumber()
    this.#SUCCESS = 3;
    this.#RETRY = "1";
    this.#EXIT = "2";
  }
  Hello() {
    OutputView.printStartGuide();
    this.gameStart();
  }

  gameStart() {
    this.getAnswer();
    this.getUserNumber()
  }

  getAnswer(){
    this.#uniqueNumberList = BaseballMaker.getRandomNumber();
  }

  getUserNumber(){
    InputView.readbaseballThreeNumber(this.isSuccess.bind(this));
  }
  
  isSuccess(inputList){
    this.isvalidNumber.isValidUserInput(inputList)
    const compareResult = BaseballGame.getHintCount(inputList,this.#uniqueNumberList);
    const [strike,ball] = [compareResult.strickCount,compareResult.ballCount];

    if(strike === this.#SUCCESS) this.showSuccess();
    this.ShowResult(strike,ball);
    this.getUserNumber();
  }

  ShowResult(strike, ball){
    OutputView.printOutputGuide(strike, ball);
  }

  showSuccess(){
    OutputView.printSuccessGuide();
    this.getOptionNumber()
  }

  getOptionNumber(){
    InputView.readOptionNumber(this.isRetry.bind(this));
  }

  isRetry(optionNum){
    this.isvalidNumber.isValidOptionNumber(optionNum);

    if(optionNum === this.#RETRY) this.gameStart();
    if(optionNum === this.#EXIT) this.GameExit();
  }
  
  GameExit(){
    Console.close();
  }
}

module.exports = Controller