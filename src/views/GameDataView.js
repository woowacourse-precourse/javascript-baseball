const { Console } = require('@woowacourse/mission-utils');
const { PRINT, ACTION_TYPE, NUMBER } = require('../utils/constants');

class GameDataView {
  #dispatcher;

  constructor() {
    this.#dispatcher = {};
  }

  update = ({ ballsAndStrikes }) => {
    const { balls, strikes } = ballsAndStrikes;

    if (balls === undefined) {
      this.newGuessAction();
      return;
    }

    Console.print(this.getGuessResult(balls, strikes));

    if (strikes === NUMBER.DIGITS) {
      this.gameOverAction();
      return;
    }

    this.newGuessAction();
  };

  newGuessAction() {
    Console.readLine(PRINT.NEW_GUESS, (input) => {
      this.#dispatcher.dispatch({
        type: ACTION_TYPE.NEW_GUESS,
        input,
      });
    });
  }

  gameOverAction() {
    Console.print(PRINT.GAME_OVER);
    Console.readLine('', (input) => {
      this.#dispatcher.dispatch({
        type: ACTION_TYPE.GAME_OVER,
        input,
      });
    });
  }

  getGuessResult(ball, strike) {
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

  injection(newDispatcher) {
    this.#dispatcher = newDispatcher;
  }
}

module.exports = GameDataView;
