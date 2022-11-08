const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const MESSAGE = require('./constants/message');
const Player = require('./Player');

const RESTART = '1';
const GAME_OVER = '2';

class Referee {
  constructor() {
    this.computer = new Computer();
    this.player = new Player(this);

    MissionUtils.Console.print(MESSAGE.GAME.START);
  }

  gameStart() {
    this.computer.setValue();
    this.player.setValue();
  }

  gameResult() {
    const count = this.getBallAndStrikeCount();

    const nothingString = count.ball === 0 && count.strike === 0 ? '낫싱' : '';
    const ballString = count.ball ? `${count.ball}볼 ` : '';
    const strikeString = count.strike ? `${count.strike}스트라이크` : '';

    MissionUtils.Console.print(nothingString + ballString + strikeString);

    if (count.strike === 3) {
      MissionUtils.Console.print(MESSAGE.GAME.WIN);
      this.gameFinish();
    } else this.player.setValue();
  }

  gameFinish() {
    MissionUtils.Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      if (answer === RESTART) this.gameStart();
      else if (answer === GAME_OVER) MissionUtils.Console.print(MESSAGE.GAME.OVER);
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
