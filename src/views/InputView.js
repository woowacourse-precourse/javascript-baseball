const { MESSAGE_QUESTION } = require('../constants/messages');
const console = require('../utils/console');

const InputView = {
  readAnswers(setUserAnswers) {
    console.readline(MESSAGE_QUESTION.SET_ANSWERS, setUserAnswers);
  },

  readSelect(setGameState) {
    console.readline(MESSAGE_QUESTION.SET_GAME_STATE, setGameState);
  },

  close() {
    console.close();
  },
};

module.exports = InputView;
