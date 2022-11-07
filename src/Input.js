const { END_NOTICE } = require("./Console");

class Input {
  checkNum(number) {
    if (isNaN(number)) throw new Error("숫자를 입력해주세요.");
  }

  checkOneOrTwo(input) {
    if (input !== "1" && input !== "2") throw new Error(END_NOTICE);
  }
}

module.exports = Input;
