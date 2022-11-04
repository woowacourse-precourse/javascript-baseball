
const constant = require('../Constants');
const MissionUtils = require('@woowacourse/mission-utils');
const errorthrow = require('./throw-error');

class Validation{

  checkInput(input, startOrrestart){
    if (startOrrestart === 0){
      errorthrow.inputError(input);
    }
    if (startOrrestart === 1){
      errorthrow.restartError(input);
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

