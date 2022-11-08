const throwError = {
  onlyNumber() {
    throw Error("숫자만 입력해주세요.");
  },
  lengthIsThree() {
    throw Error("세 자리 숫자를 입력해주세요.");
  },
};

module.exports = { throwError };
