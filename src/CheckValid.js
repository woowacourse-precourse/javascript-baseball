const { ERROR } = require("./constants");

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
  constructor({ userNum, retryNum }) {
    this.userNum = userNum;
    this.retryNum = retryNum;
  }

  checkValidation() {
    if (checkLength(this.userNum) === false) {
      return ERROR.USER_INPUT_LENGTH;
    }

    if (checkDuplicates(this.userNum) === false) {
      return ERROR.USER_INPUT_DUPLICATES;
    }

    if (checkRange(this.userNum) === false) {
      return ERROR.USER_INPUT_RANGE;
    }
    if (checkBlank(this.userNum) === false) {
      return ERROR.USER_INPUT_BLANK;
    }
  }

  checkRetryInput() {
    if (checkRangeOfRetryUserInput(this.retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_RANGE;
    }
    if (checkBlank(this.retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_BLANK;
    }
    if (checkLengthOfRetryUserInput(this.retryNum) === false) {
      return ERROR.USER_RETRY_INPUT_LENGTH;
    }
  }
}
module.exports = CheckInputValid;
