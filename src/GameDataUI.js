const { Console } = require('@woowacourse/mission-utils');
const utils = require('./utils');

class GameDataUI {
  #action;

  constructor() {
    this.#action = {};
  }

  #inputError() {
    Console.close();
    throw new Error('잘못된 입력입니다! 게임을 종료합니다.');
  }

  injection(newAction) {
    this.#action = newAction;
  }

  newGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (input.length !== 3) {
        this.#inputError();
      }

      if (utils.getUniqueNumberCount(input) !== 3) {
        this.#inputError();
      }

      this.#action.sendToDispatcher({
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
          this.#action.sendToDispatcher({
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

    Console.print(utils.getGuessResult(balls, strikes));
    if (strikes === 3) {
      this.gameOver();
    } else {
      this.newGuess();
    }
  };
}

module.exports = GameDataUI;
