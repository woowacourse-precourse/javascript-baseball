class Constraints {
  checkNumberRange(inputData) {
    if (typeof inputData === "object") {
      inputData = inputData.join("");
    }

    const regex = /^[1-9]+$/;

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

    const checkResult = new Set(inputData);

    if (checkResult.size !== inputData.length) {
      return false;
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
    if (userInput !== "1" && userInput !== "2") {
      throw new Error("잘못된 입력입니다. 게임을 종료합니다.");
    }

    return true;
  }
}

module.exports = Constraints;
