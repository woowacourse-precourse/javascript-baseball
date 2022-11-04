const Exception = require('../model/Exception');
const constant = require('../Constants');
const MissionUtils = require("@woowacourse/mission-utils");


class Validation{

  constructor(){
    this.error = new Exception();
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

  checkSuccess(resultarray){
    if (resultarray[0] === 3){
      MissionUtils.Console.print(constant.GAME.ANSWER);
      MissionUtils.Console.print(constant.GAME.ANSWER_NEXT);
      return true;
    }
  }

}

module.exports = Validation;

