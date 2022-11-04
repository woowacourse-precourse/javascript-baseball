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
    if (
      !this.checkNumberRange(inputData) ||
      !this.checkInputLength(inputData) ||
      !this.checkNoSameNumber(inputData)
    ) {
      throw new Error("잘못된 값이 생성되었습니다. 게임을 종료합니다.");
    }

    return true;
  }
}

module.exports = CheckConstraints;
