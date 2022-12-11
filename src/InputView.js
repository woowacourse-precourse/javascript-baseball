const { readLine, close } = require('./utils/Utils');
const { INPUT_TEXT, REDO_TEXT } = require('./constants/Questions');

const InputView = {
  readNumbers(callback) {
    readLine(INPUT_TEXT, callback);
  },

  readRetry(callback) {
    readLine(REDO_TEXT, callback);
  },

  endGame() {
    close();
  },
};

module.exports = InputView;
