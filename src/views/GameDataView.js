const { Console } = require('@woowacourse/mission-utils');
const { PRINT, ACTION_TYPE, NUMBER } = require('../utils/constants');

class GameDataView {
  #dispatcher;

  constructor(Dispatcher) {
    this.#dispatcher = Dispatcher;
  }

  update = ({ ballsAndStrikes }) => {
    const { balls, strikes } = ballsAndStrikes;

    if (balls === undefined) {
      this.generateNewGuessAction();
      return;
    }

    Console.print(this.getGuessString(balls, strikes));

    if (strikes === NUMBER.DIGITS) {
      this.generateGameOverAction();
      return;
    }

    this.generateNewGuessAction();
  };

  generateNewGuessAction() {
    Console.readLine(PRINT.NEW_GUESS, (input) => {
      this.#dispatcher.dispatch({
        type: ACTION_TYPE.NEW_GUESS,
        input,
      });
    });
  }

  generateGameOverAction() {
    Console.print(PRINT.GAME_OVER);
    Console.readLine('', (nextGameStatus) => {
      this.#dispatcher.dispatch({
        type: ACTION_TYPE.GAME_OVER,
        nextGameStatus,
      });
    });
  }

  getGuessString(ball, strike) {
    if (ball + strike === 0) {
      return PRINT.NOTHING;
    }

    const ballString = this.getBallString(ball);
    const strikeString = this.getStrikeString(strike);

    if (ballString === '') {
      return strikeString;
    }

    return `${ballString} ${strikeString}`;
  }

  getBallString(ball) {
    if (ball !== 0) {
      return `${ball}${PRINT.BALL}`;
    }
    return '';
  }

  getStrikeString(strike) {
    if (strike !== 0) {
      return `${strike}${PRINT.STRIKE}`;
    }
    return '';
  }
}

module.exports = GameDataView;
