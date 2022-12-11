const { print } = require("./utils/Utils");
const { END_TEXT, START_TEXT } = require("./constants/Questions");
const OutputView = {
  printStartText() {
    print(START_TEXT);
  },

  printEndText() {
    print(END_TEXT);
  },

  printMessage(message) {
    print(message);
  },
};

module.exports = OutputView;
