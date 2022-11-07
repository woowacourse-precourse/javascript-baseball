class UserModel {
  isLengthEqualsThree(input) {
    return input.length !== 3;
  }

  isConsistOfOnlyNumber(input) {
    return /^[0-9]*$/g.test(input);
  }

  isNumberRangeOneToNine(input) {
    return /^[1-9]*$/g.test(input);
  }

  isDuplicatedInNumber(input) {
    return [...new Set(input)].join("").length === input.length;
  }

  isInputNumbersValid(numberFromUser) {
    if (this.isLengthEqualsThree(numberFromUser)) {
      throw Error("세글자의 수만 입력 해주세요.");
    }
    if (this.isConsistOfOnlyNumber(numberFromUser)) {
      throw Error("숫자만 입력 해주세요.");
    }
    if (this.isNumberRangeOneToNine(numberFromUser)) {
      throw Error("1~9사이 숫자만 입력해주세요.");
    }
    if (this.isDuplicatedInNumber(numberFromUser)) {
      throw Error("같은 수를 입력하지 말아주세요.");
    }
    return numberFromUser;
  }
}
module.exports = UserModel;
