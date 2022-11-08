const { Console } = require('@woowacourse/mission-utils');
const { RESTART, GAME_OVER } = require('./constants/gameSetting');
const MESSAGE = require('./constants/message');
const getGameResultMessage = require('./utils/getGameResultMessage');
const Computer = require('./Computer');
const Player = require('./Player');

class Referee {
  constructor() {
    this.computer = new Computer();
    this.player = new Player(this);
    Console.print(MESSAGE.GAME.START);
  }

  gameStart() {
    this.computer.setValue();
    this.player.setValue();
  }

  gameResult() {
    const count = this.getBallAndStrikeCount();
    Console.print(getGameResultMessage(count.ball, count.strike));

    if (count.strike === 3) {
      Console.print(MESSAGE.GAME.WIN);
      this.gameFinish();
    } else this.player.setValue();
  }

  gameFinish() {
    Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      const stringAnswer = answer + '';

      if (stringAnswer === RESTART) this.gameStart();
      else if (stringAnswer === GAME_OVER) {
        Console.print(MESSAGE.GAME.OVER);
        Console.close();
      } else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  getBallAndStrikeCount() {
    const value = {
      computer: this.computer.getValue(),
      player: this.player.getValue(),
    };
    const count = {
      ball: 0,
      strike: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (value.computer[i] === value.player[i]) count.strike++;
      else if (value.computer.includes(value.player[i])) count.ball++;
    }

    return count;
  }
}

module.exports = Referee;
