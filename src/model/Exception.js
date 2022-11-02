const constant = require('../Constants');

class Exception{

  inputError(input){
    if (!/[0-9]+/g.test(input)){
      return constant.ERROR.INPUT_FORMAT;
    }
    if (String(input).length !== 3){
      return constant.ERROR.INPUT_LENGTH;
    }
    if (Array.from(new Set(Array.from(input))).length !== 3){
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

module.exports = Exception;