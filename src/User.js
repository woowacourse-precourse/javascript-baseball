class User {
  guessNum() {
    Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      if (!this.checkValidation(userNum)) {
        this.sayError();
      }
      return input;
    });
  }

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

  sayError() {
    throw new Error("적절한 입력이 아닙니다. 게임을 종료합니다.");
  }
}
