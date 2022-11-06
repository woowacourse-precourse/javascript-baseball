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
function checkZero(userNum) {
  if (/^[1-9]*$/g.test(userNum.join("")) === false) {
    return false;
  }
}

function checkBlank(userNum) {
  if (userNum.length === 0) {
    return false;
  }
}

class CheckUserInput {
  constructor({ userNum }) {
    this.userNum = userNum;
  }

  checkValidation() {
    if (checkLength(this.userNum) === false) {
      throw new Error("숫자를 3개 입력해주세요");
    }

    if (checkDuplicates(this.userNum) === false) {
      throw new Error("숫자에 중복이 있습니다");
    }

    if (checkZero(this.userNum) === false) {
      throw new Error("숫자 1~9까지만 입력이 가능합니다");
    }
    if (checkBlank(this.userNum) === false) {
      throw new Error("공백은 입력할 수 없습니다");
    }
  }
}
module.exports = CheckUserInput;
