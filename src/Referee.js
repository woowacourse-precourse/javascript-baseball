const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const MESSAGE = require('./constants/message');
const Player = require('./Player');

const RESTART = '1';
const GAME_OVER = '2';

class Referee {
  constructor() {
    this.computerValue = '';
    this.playerValue = '';
  }

  gameInit() {
    MissionUtils.Console.print(MESSAGE.GAME.START);
    this.gameStart();
  }

  gameStart() {
    this.computerValue = Computer.generatorComputerValue();
    this.inputPlayerValue();
  }

  gameResult() {
    const [ball, strike] = this.getBallAndStrikeCount();

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
    }
    if (ball !== 0 && strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
    if (ball === 0 && strike !== 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    if (ball !== 0 && strike !== 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike === 3) {
      MissionUtils.Console.print(MESSAGE.GAME.WIN);
      this.gameFinish();
    } else this.inputPlayerValue();
  }

  gameFinish() {
    MissionUtils.Console.readLine(MESSAGE.GAME.FINISH, (answer) => {
      if (answer === RESTART) this.gameStart();
      else if (answer === GAME_OVER) MissionUtils.Console.print(MESSAGE.GAME.OVER);
      else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }

  inputPlayerValue() {
    MissionUtils.Console.readLine(MESSAGE.GAME.INPUT, (answer) => {
      this.playerValue = Player.checkValidValue(answer);
      this.gameResult();
    });
  }

  getBallAndStrikeCount() {
    const computerValue = this.computerValue;
    const playerValue = this.playerValue;

    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerValue[i] === playerValue[i]) strike++;
      else if (computerValue.includes(playerValue[i])) ball++;
    }

    return [ball, strike];
  }
}

module.exports = Referee;
