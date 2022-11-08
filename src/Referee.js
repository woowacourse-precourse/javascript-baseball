const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const MESSAGE = require('./constants/message');
const Player = require('./Player');
const isAvailableValue = require('./utils/isAvailableValue');

const RESTART = '1';
const GAME_OVER = '2';

class Referee {
  constructor() {
    this.computer = null;
    this.player = null;
  }

  gameInit() {
    MissionUtils.Console.print(MESSAGE.GAME.START);
    this.computer = new Computer();
    this.player = new Player();
    this.gameStart();
  }

  gameStart() {
    this.computer.setValue();
    this.inputPlayerValue();
  }

  gameResult() {
    const [ball, strike] = this.getBallAndStrikeCount();

    const nothingString = ball === 0 && strike === 0 ? '낫싱' : '';
    const ballString = ball ? `${ball}볼 ` : '';
    const strikeString = strike ? `${strike}스트라이크` : '';

    MissionUtils.Console.print(nothingString + ballString + strikeString);

    if (strike === 3) {
      MissionUtils.Console.print(MESSAGE.GAME.WIN);
      this.gameFinish();
    } else this.inputPlayerValue();
  }

  gameFinish() {
    MissionUtils.Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      if (answer === RESTART) return this.gameStart();
      if (answer === GAME_OVER) return MissionUtils.Console.print(MESSAGE.GAME.WIN);
      return this.gameFinish();
    });
  }

  inputPlayerValue() {
    MissionUtils.Console.readLine(MESSAGE.GAME.INPUT, (answer) => {
      if (isAvailableValue(answer)) {
        this.player.setValue(answer);
        this.gameResult();
      } else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  getBallAndStrikeCount() {
    const [computerValue, playerValue] = [this.computer.getValue(), this.player.getValue()];
    let [ball, strike] = [0, 0];

    if (!computerValue || !playerValue) throw new Error(MESSAGE.ERROR.SYSTEM);

    for (let i = 0; i < 3; i++) {
      if (computerValue[i] === playerValue[i]) strike++;
      else if (computerValue.includes(playerValue[i])) ball++;
    }
    return [ball, strike];
  }
}

module.exports = Referee;
