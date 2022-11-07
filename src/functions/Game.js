const { GAME_MESSAGE } = require('../constants/system message');
const { BASIC_NUMBER } = require('../constants/game numbers');
const { ErrorCheck } = require('./ErrorCheck');

class Game {
  static getStrikeBallCount(baseballNumber, userInput) {
    let [STRIKE, BALL] = [BASIC_NUMBER.INIT, BASIC_NUMBER.INIT];

    baseballNumber
      .map((num) => `${num}`)
      .forEach((num, index) => {
        if (num === userInput[index]) {
          STRIKE++;
        } else if (userInput.includes(num)) {
          BALL++;
        }
      });
    return [STRIKE, BALL];
  }

  static getStrikeBallMessage(STRIKE, BALL) {
    const ballMessage = BALL ? `${BALL}${GAME_MESSAGE.BALL}` : '';
    const strikeMessage = STRIKE ? `${STRIKE}${GAME_MESSAGE.STRIKE}` : '';

    return ErrorCheck.isNothing(STRIKE, BALL)
      ? GAME_MESSAGE.NOTHING
      : `${ballMessage + strikeMessage}`;
  }
}

exports.Game = Game;
