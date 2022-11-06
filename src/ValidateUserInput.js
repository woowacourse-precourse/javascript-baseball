class ValidateUserInput {
  constructor() {
    this.numberInRange = /^[1-9]+$/;
    this.pickedNumber = [];
    this.ERROR_COMMENT =
      "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.";
  }

  validate = (pickedNumberByUser) => {
    // 서로 다른 3자리 수를 입력하지 않은 경우
    pickedNumberByUser
      .split("")
      .forEach((el) =>
        !this.pickedNumber.includes(el) ? this.pickedNumber.push(el) : ""
      );
    if (this.pickedNumber.length !== 3) {
      throw new Error(this.ERROR_COMMENT);
    }

    if (
      pickedNumberByUser.length !== 3 ||
      // 1 ~ 9가 아닌 다른 값을 입력한 경우
      !this.numberInRange.test(pickedNumberByUser)
    ) {
      throw new Error(this.ERROR_COMMENT);
    }
  };
}

module.exports = ValidateUserInput;
