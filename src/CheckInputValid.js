const { ERROR } = require("./Constants");

function checkLengthOfUserInput(userNum) {
  if (userNum.length !== 3) {
    return false;
  }
}
function checkDuplicatesOfUserInput(userNum) {
  let checkArr = [];
  let i = 0;
  for (; i < userNum.length; i++) {
    if (checkArr.includes(userNum[i]) === true) {
      return false;
    }
    checkArr.push(userNum[i]);
  }
}
function checkRangeOfUserInput(userNum) {
  if (/^[1-9]*$/g.test(userNum.join("")) === false) {
    return false;
  }
}

function checkRangeOfRetryUserInput(retryNum) {
  if (/^[1-2]*$/g.test([...String(retryNum)].join("")) === false) {
    return false;
  }
}
function checkLengthOfRetryUserInput(retryNum) {
  if ([...String(retryNum)].length !== 1) {
    return false;
  }
}

class CheckInputValid {
  checkUserInput(userNum) {
    if (checkLengthOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_LENGTH;
    }

    if (checkDuplicatesOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_DUPLICATES;
    }

    if (checkRangeOfUserInput(userNum) === false) {
      return ERROR.USER_INPUT_RANGE;
    }
    return ERROR.USER_INPUT_PASS;
  }

  checkUserRetryInput(retryNum) {
    if (checkRangeOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_RANGE;
    }

    if (checkLengthOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_LENGTH;
    }
    return ERROR.USER_INPUT_PASS;
  }
}
module.exports = CheckInputValid;
