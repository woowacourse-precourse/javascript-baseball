const { Console } = require('@woowacourse/mission-utils');
const { Computer } = require('./Computer');
const { ErrorCheck } = require('./functions/ErrorCheck');
const { SYSTEM_MESSAGE, GAME_MESSAGE } = require('./constants/system message');
const { REPLAY_NUMBER, BASIC_NUMBER } = require('./constants/game numbers');

class Baseball {
  constructor() {
    this.randomNumber = [];
  }

  playGame() {
    Console.print(SYSTEM_MESSAGE.START);
    this.randomNumber = Computer.getRandomNumber();

    this.getUserNumber();
  }

  getUserNumber() {
    Console.readLine(SYSTEM_MESSAGE.GET_NUMBER, (userInput) => {
      ErrorCheck.guessError(userInput);

      this.getStrikeBallCount(this.randomNumber, userInput);
    });
  }

  getStrikeBallCount(randomNumber, userInput) {
    const userNumber = userInput.toString();
    let [STRIKE, BALL] = [BASIC_NUMBER.INIT, BASIC_NUMBER.INIT];

    randomNumber
      .map((num) => `${num}`)
      .forEach((num, index) => {
        if (num === userNumber[index]) STRIKE++;
        else if (userNumber.includes(num)) BALL++;
      });

    this.printStrikeBallCountMessage(STRIKE, BALL);
  }

  printStrikeBallCountMessage(STRIKE, BALL) {
    let nothing = false;
    if (ErrorCheck.isNothing(STRIKE, BALL)) nothing = true;

    const ballMessage = BALL ? `${BALL}${GAME_MESSAGE.BALL}` : '';
    const strikeMessage = STRIKE ? `${STRIKE}${GAME_MESSAGE.STRIKE}` : '';
    const resultMessage = nothing
      ? GAME_MESSAGE.NOTHING
      : `${ballMessage + strikeMessage}`;

    Console.print(resultMessage);

    if (resultMessage !== GAME_MESSAGE.CORRECT) this.getUserNumber();
    else {
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

    if (replayNumber === REPLAY_NUMBER.KEEP_PLAY) this.playGame();
    else Console.close();
  }
}

exports.Baseball = Baseball;
