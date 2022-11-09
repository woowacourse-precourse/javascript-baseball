const { Console } = require('@woowacourse/mission-utils');
const { RESTART, GAME_OVER, VALUE_SIZE } = require('./constants/gameSetting');
const MESSAGE = require('./constants/message');
const getGameResultMessage = require('./utils/getGameResultMessage');
const isAvailableValue = require('./utils/isAvailableValue');
const Computer = require('./Computer');
const Player = require('./Player');

class Referee {
  constructor() {
    this.computer = new Computer();
    this.player = new Player();
    Console.print(MESSAGE.GAME.START);
  }

  gameStart() {
    this.computer.setValue();
    this.player.readInput(this.setPlayerValue.bind(this));
  }

  gameResult() {
    const count = this.getBallAndStrikeCount();
    Console.print(getGameResultMessage(count.ball, count.strike));

    if (count.strike === 3) {
      Console.print(MESSAGE.GAME.WIN);
      return this.gameFinish();
    }
    this.player.readInput(this.setPlayerValue.bind(this));
  }

  gameFinish() {
    Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      const stringAnswer = answer + '';

      if (stringAnswer === RESTART) return this.gameStart();
      if (stringAnswer === GAME_OVER) {
        Console.print(MESSAGE.GAME.OVER);
        return Console.close();
      }
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  getBallAndStrikeCount() {
    const value = {
      computer: this.computer.getValue() + '',
      player: this.player.getValue() + '',
    };
    const count = {
      ball: 0,
      strike: 0,
    };

    [...value.computer].forEach((number, index) => {
      if (number === value.player[index]) count.strike += 1;
      else if (value.player.includes(number)) count.ball += 1;
    });

    return count;
  }

  setPlayerValue(value) {
    if (isAvailableValue(value)) {
      this.player.setValue(value);
      return this.gameResult();
    }
    throw new Error(MESSAGE.ERROR.WRONG_VALUE);
  }
}

module.exports = Referee;
