class User {
  checkValidation(userNum) {
    if (!this.checkLength3(userNum)) return false;
    if (!this.checkOnlyNaturalNum(userNum)) return false;
    if (!this.checkNoDuplicate(userNum)) return false;
    return true;
  }

  checkLength3(userNum) {
    return userNum.length === 3;
  }

  checkOnlyNaturalNum(userNum) {
    if (isNaN(userNum)) return false;
    if (!Number.isInteger(userNum)) return false;
    const userNumList = [...userNum];
    if (userNumList.includes("0")) return false;
    if (userNumList.includes("-")) return false;
    return true;
  }

  checkNoDuplicate(userNum) {
    const userNumSet = new Set([...userNum]);
    return userNumSet.size === 3;
  }
}

module.exports = User;
