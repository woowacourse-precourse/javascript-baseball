const { Console } = require('@woowacourse/mission-utils');
const { getUniqueNumberCount, getGuessResult } = require('./utils');

class GameDataUI {
  #dispatcher;

  constructor() {
    this.#dispatcher = {};
  }

  #inputError() {
    Console.close();
    throw new Error('잘못된 입력입니다! 게임을 종료합니다.');
  }

  injection(newDispatcher) {
    this.#dispatcher = newDispatcher;
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
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
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
      },
    );
  }

  update = ({ ballsAndStrikes }) => {
    const { balls, strikes } = ballsAndStrikes;

    if (balls === undefined) {
      this.newGuess();
      return;
    }

    Console.print(getGuessResult(balls, strikes));
    if (strikes === 3) {
      this.gameOver();
    } else {
      this.newGuess();
    }
  };
}

module.exports = GameDataUI;
