class CheckConstraints {
  checkNumberRange(inputData) {
    const regex = /^[1-9]+$/;

    if (typeof inputData === "object") {
      inputData = inputData.join("");
    }

    if (!regex.test(inputData)) {
      return false;
    }

    return true;
  }

  checkInputLength(inputData) {
    if (inputData.length !== 3) {
      return false;
    }

    return true;
  }

  checkNoSameNumber(inputData) {
    if (typeof inputData === "string") {
      inputData = inputData.split("");
    }

    for (let i = 0; i < inputData.length; i++) {
      if (
        inputData.indexOf(inputData[i]) !== inputData.lastIndexOf(inputData[i])
      ) {
        return false;
      }
    }

    return true;
  }

  checkConstraints(inputData) {
    if (typeof inputData === "undefined") {
      throw new Error("undefined가 들어왔습니다.");
    }

    if (
      !this.checkNumberRange(inputData) ||
      !this.checkInputLength(inputData) ||
      !this.checkNoSameNumber(inputData)
    ) {
      throw new Error("잘못된 값이 생성되었습니다. 게임을 종료합니다.");
    }

    return true;
  }

  checkRePlayInputConstraints(userInput) {
    if (userInput === "1" || userInput === "2") {
      return true;
    }

    throw new Error("잘못된 입력입니다. 게임을 종료합니다.");
  }
}

module.exports = CheckConstraints;
