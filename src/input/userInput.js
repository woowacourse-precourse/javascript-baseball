const throwError = require('../game/throwError')

function isLengthThree(userInputArray) {
    return userInputArray.length === 3;
  }
  
  function isValidNumber(userInputArray) {
    const returnBool = userInputArray.every((element) => {
      return element >= '1' && element <= '9';
    });
    return returnBool;
  }
  
  function isSameNumber(userInputArray) {
    const userInputSet = new Set(userInputArray);
    return userInputSet.size === userInputArray.length;
  }
  
  function isValidInput(userInputArray) {
    let returnIsValid = [true, true, true];
    returnIsValid[0] = isLengthThree(userInputArray);
    returnIsValid[1] = isValidNumber(userInputArray);
    returnIsValid[2] = isSameNumber(userInputArray);
    
    const returnBool = returnIsValid.every((element) => {
      return element;
    });
    return returnBool;
  }
  
  function numToArr(userInputNums) {
    const tmpArray = userInputNums.split('');
    const userInputArray = tmpArray.map(element => Number(element));
    return userInputArray;
  }

function userInputCallback(userInputNums, userInputArray) {
    userInputArray = numToArr(userInputNums);
    const isValidFlag = isValidInput(userInputArray);
    if(!isValidFlag) throwError();
    return userInputArray;
}

