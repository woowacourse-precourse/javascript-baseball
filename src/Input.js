const { END_NOTICE } = require("./Console");

class Input {
  checkNum(number) {
    if (isNaN(number)) throw new Error("숫자를 입력해주세요.");
    return true;
  }

  checkZero(number) {
    if (number === 0)
      throw new Error("1 ~ 9 사이의 숫자만 입력할 수 있습니다.");
    return true;
  }

  checkOneOrTwo(input) {
    if (input !== "1" && input !== "2") throw new Error(END_NOTICE);
  }
}

module.exports = Input;
