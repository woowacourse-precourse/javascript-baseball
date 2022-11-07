const constant = require('../Constants');

class ExceptionCheck{

  inputError(input){
    if (!/[0-9]+/g.test(input) || String(input).includes('0')){
      return constant.ERROR.INPUT_FORMAT;
    }
    if (String(input).length !== constant.GAME.THREENUMBER){
      return constant.ERROR.INPUT_LENGTH;
    }
    if ((new Set(Array.from(input))).size !== constant.GAME.THREENUMBER){
      return constant.ERROR.INPUT_DUPLICATE;
    }
    return false;
  }
  restartError(input){
    if (input !== '1' && input !== '2'){
      return constant.ERROR.NEWGAME_RESTART;
    }
    return false;
  }
}

module.exports = ExceptionCheck;