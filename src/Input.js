const { END_NOTICE } = require("./Console");

class Input {
  checkOneOrTwo(input) {
    if (input !== "1" && input !== "2") throw new Error(END_NOTICE);
  }
}

module.exports = Input;
