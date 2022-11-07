const { Console } = require('@woowacourse/mission-utils');
const { getUniqueNumberCount } = require('../utils/utils');

class GameDataUI {
  #dispatcher;

  constructor() {
    this.#dispatcher = {};
  }

  update = ({ ballsAndStrikes }) => {
    const { balls, strikes } = ballsAndStrikes;

    if (balls === undefined) {
      this.newGuess();
      return;
    }

    Console.print(this.getGuessResult(balls, strikes));

    if (strikes === 3) {
      this.gameOver();
      return;
    }

    this.newGuess();
  };

  #inputError() {
    Console.close();
    throw new Error('잘못된 입력입니다! 게임을 종료합니다.');
  }

  newGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (input.length !== 3) {
        this.#inputError();
      }

      if (getUniqueNumberCount(input) !== 3) {
        this.#inputError();
      }

      this.#dispatcher.dispatch({
        type: 'new-guess',
        input,
      });
    });
  }

  gameOver() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    Console.readLine('', (answer) => {
      if (answer === '1') {
        this.#dispatcher.dispatch({
          type: 'game-restart',
        });
        return;
      }

      if (answer === '2') {
        Console.close();
        return;
      }

      this.#inputError();
    });
  }

  getGuessResult(ball, strike) {
    if (ball + strike === 0) {
      return '낫싱';
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
      return `${ball}볼`;
    }
    return '';
  }

  getStrikeString(strike) {
    if (strike !== 0) {
      return `${strike}스트라이크`;
    }
    return '';
  }

  injection(newDispatcher) {
    this.#dispatcher = newDispatcher;
  }
}

module.exports = GameDataUI;
