class ValidateUserInput {
  constructor() {
    this.numberInRange = /^[1-9]+$/;
  }

  validate = (pickedNumberByUser) => {
    const pickedNumber = [];
    const ERROR_COMMENT = "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.";

    // 서로 다른 3자리 수를 입력하지 않은 경우
    pickedNumberByUser
      .split("")
      .forEach((el) => (!pickedNumber.includes(el) ? pickedNumber.push(el) : ""));
    if (pickedNumber.length !== 3) {
      throw new Error(ERROR_COMMENT);
    }

    if (
      pickedNumberByUser.length !== 3 ||
      // 1 ~ 9가 아닌 다른 값을 입력한 경우
      !this.numberInRange.test(pickedNumberByUser)
    ) {
      throw new Error(ERROR_COMMENT);
    }
  };

  validateOneOrTwo = (selectedNumber) => {
    selectedNumber = Number(selectedNumber);

    if (selectedNumber !== 1 && selectedNumber !== 2) {
      throw new Error("1 또는 2만 입력해주세요.");
    }
  };
}

module.exports = ValidateUserInput;
