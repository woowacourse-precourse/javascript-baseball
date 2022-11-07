
const constant = require('../Constants');
const MissionUtils = require('@woowacourse/mission-utils');
const errorthrow = require('./throw-error');

class Validation{

  checkErrorofInput(input, startOrrestart){
    if (startOrrestart === 'start'){
      errorthrow.inputErrorThrow(input);
    }
    if (startOrrestart === 'restart'){
      errorthrow.restartErrorThrow(input);
    }
  }

  isThreeStrike(resultarray){
    if (resultarray[0] === constant.GAME.THREENUMBER){
      MissionUtils.Console.print(constant.GAME.ANSWER);
      MissionUtils.Console.print(constant.GAME.ANSWER_NEXT);
      return true;
    }
  }

}

module.exports = Validation;

