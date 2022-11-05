const { Console } = require('@woowacourse/mission-utils');
const utils = require('./utils');

class GameStatusUI {
  #action;

  constructor() {
    this.#action = {};
  }

  injection(newAction) {
    this.#action = newAction;
  }

  newGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.#action.sendToDispatcher({
        type: 'new-guess',
        input: answer,
      });
    });
  }

  gameOver() {
    Console.readLine(
      '3스트라이크'
      + '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n'
      + '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === '1') {
          this.#action.sendToDispatcher({
            type: 'game-restart',
          });
        }
        if (answer === '2') {
          Console.close();
        }
      },
    );
  }

  update = ({ ballsAndStrikes }) => {
    const { balls, strikes } = ballsAndStrikes;

    if (!(balls || strikes)) {
      this.newGuess();
      return;
    }

    if (strikes === 3) {
      this.gameOver();
    } else {
      Console.print(utils.getGuessResult(balls, strikes));
      this.newGuess();
    }
  };
}

module.exports = GameStatusUI;
