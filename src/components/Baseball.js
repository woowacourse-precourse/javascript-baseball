const { Console } = require('@woowacourse/mission-utils');
const { Computer } = require('./Computer');
const { ErrorCheck } = require('./ErrorCheck');
const { Game } = require('./Game');
const {
  SYSTEM_MESSAGE,
  COUNT_MESSAGE,
} = require('../constants/system message');
const { REPLAY_NUMBER, BOOLEAN } = require('../constants/game numbers');

class Baseball {
  constructor() {
    this.randomNumber = [];
    this.isPlayFirst = BOOLEAN.TRUE;
  }

  playGame() {
    if (this.isPlayFirst) {
      this.isPlayFirst = BOOLEAN.FALSE;
      Console.print(SYSTEM_MESSAGE.START);
    }

    this.randomNumber = Computer.getRandomNumber();
    this.getUserNumber();
  }

  getUserNumber() {
    Console.readLine(SYSTEM_MESSAGE.GET_NUMBER, (userInput) => {
      ErrorCheck.guessError(userInput);

      this.getGameCount(this.randomNumber, userInput);
    });
  }

  getGameCount(randomNumber, userInput) {
    const [strikeCount, ballCount] = Game.getStrikeBallCount(
      randomNumber,
      userInput
    );

    this.printGameCount(strikeCount, ballCount);
  }

  printGameCount(strikeCount, ballCount) {
    const strikeBallMessage = Game.getStrikeBallMessage(strikeCount, ballCount);

    Console.print(strikeBallMessage);

    if (!Game.isEqual(strikeBallMessage, COUNT_MESSAGE.CORRECT)) {
      this.getUserNumber();
    } else {
      Console.print(SYSTEM_MESSAGE.END);
      this.getReplayNumber();
    }
  }

  getReplayNumber() {
    Console.readLine(SYSTEM_MESSAGE.RESTART, (playInput) => {
      this.isReplay(playInput);
    });
  }

  isReplay(replayNumber) {
    ErrorCheck.replayError(replayNumber);

    if (Game.isEqual(replayNumber, REPLAY_NUMBER.KEEP_PLAY)) {
      this.playGame();
    } else {
      Console.close();
    }
  }
}

module.exports = { Baseball };
