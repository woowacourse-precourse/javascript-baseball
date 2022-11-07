const { ERROR } = require("./data/constants");

function checkLength(userNum) {
  if (userNum.length !== 3) {
    return false;
  }
}
function checkDuplicates(userNum) {
  let checkArr = [];
  for (let i = 0; i < userNum.length; i++) {
    if (checkArr.includes(userNum[i]) === true) {
      return false;
    }
    checkArr.push(userNum[i]);
  }
}
function checkRange(userNum) {
  if (/^[1-9]*$/g.test(userNum.join("")) === false) {
    return false;
  }
}

function checkBlank(userNum) {
  if (userNum.length === 0) {
    return false;
  }
}
function checkRangeOfRetryUserInput(retryNum) {
  if (/^[1-2]*$/g.test(retryNum) === false) {
    return false;
  }
}
function checkLengthOfRetryUserInput(retryNum) {
  if (retryNum.length !== 1) {
    return false;
  }
}

class CheckInputValid {
  checkUserInput(userNum) {
    if (checkLength(userNum) === false) {
      return ERROR.USER_INPUT_LENGTH;
    }

    if (checkDuplicates(userNum) === false) {
      return ERROR.USER_INPUT_DUPLICATES;
    }

    if (checkRange(userNum) === false) {
      return ERROR.USER_INPUT_RANGE;
    }
    if (checkBlank(userNum) === false) {
      return ERROR.USER_INPUT_BLANK;
    }
    return ERROR.USER_INPUT_PASS;
  }

  checkUserRetryInput(retryNum) {
    if (checkRangeOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_RANGE;
    }
    if (checkBlank(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_BLANK;
    }
    if (checkLengthOfRetryUserInput(retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_LENGTH;
    }
    return ERROR.USER_INPUT_PASS;
  }
}
module.exports = CheckInputValid;
