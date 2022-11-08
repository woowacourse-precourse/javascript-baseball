const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const MESSAGE = require('./constants/message');
const Player = require('./Player');

const RESTART = '1';
const GAME_OVER = '2';

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

    if (count.ball === 0 && count.strike === 0) Console.print('낫싱');
    if (count.ball !== 0 && count.strike === 0) Console.print(`${count.ball}볼`);
    if (count.ball === 0 && count.strike !== 0) Console.print(`${count.strike}스트라이크`);
    if (count.ball !== 0 && count.strike !== 0) Console.print(`${count.ball}볼 ${count.strike}스트라이크`);

    if (count.strike === 3) {
      Console.print(MESSAGE.GAME.WIN);
      this.gameFinish();
    } else this.player.setValue();
  }

  gameFinish() {
    Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      const stringAnswer = answer + '';
      if (stringAnswer === RESTART) this.gameStart();
      else if (stringAnswer === GAME_OVER) Console.print(MESSAGE.GAME.OVER);
      else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  getBallAndStrikeCount() {
    const [computerValue, playerValue] = [this.computer.getValue(), this.player.getValue()];
    const count = {
      ball: 0,
      strike: 0,
    };

    if (!computerValue || !playerValue) throw new Error(MESSAGE.ERROR.SYSTEM);

    for (let i = 0; i < 3; i++) {
      if (computerValue[i] === playerValue[i]) count.strike++;
      else if (computerValue.includes(playerValue[i])) count.ball++;
    }
    return count;
  }
}

module.exports = Referee;
