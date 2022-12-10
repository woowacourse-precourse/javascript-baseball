const MESSAGE = require('../constants/gameMessages');
const NUMBER = require('../constants/gameSetting');

class InputValidator {
    static isRandomInputErrorCase (answer) {
      const exceptionInput = answer;
  
      const inputList = exceptionInput?.split('');
      const setCollection = new Set(inputList);
      const isSame = setCollection.size !== inputList?.length;
      const isThreeNumber = exceptionInput?.toString().length !== NUMBER.RANDOM_LENGTH;
  
      if (
        exceptionInput?.split('').map(Number)
          .includes(NUMBER.EXCEPT)
          || exceptionInput?.split('').includes('-')
          || isNaN(exceptionInput)
          || isThreeNumber
          || isSame
      ) {
        throw new Error(MESSAGE.GAME.ERROR);
      }
    }
}

module.exports = InputValidator;