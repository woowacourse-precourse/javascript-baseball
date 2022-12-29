class ValidateUserInput {
  static isThreeDigitsNumberInRange(pickedNumberByUser) {
    const NUMBER_IN_RANGE = /^[1-9]+$/;
    const ERROR_COMMENT = '1부터 9까지 서로 다른 수로 이루어진 3자리 숫자를 입력해주세요.';
    const pickedNumber = [];

    // 서로 다른 3자리 수를 입력하지 않은 경우
    pickedNumberByUser
      .split('')
      .forEach((el) => (!pickedNumber.includes(el) ? pickedNumber.push(el) : ''));
    if (pickedNumber.length !== 3) throw new Error(ERROR_COMMENT);

    if (pickedNumberByUser.length !== 3 || !NUMBER_IN_RANGE.test(pickedNumberByUser)) {
      throw new Error(ERROR_COMMENT);
    }
  }

  static isRestartOrEnd(selectedNumber) {
    selectedNumber = Number(selectedNumber);

    if (selectedNumber !== 1 && selectedNumber !== 2) throw new Error('1 또는 2만 입력해주세요.');
  }
}

module.exports = ValidateUserInput;
