const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_MESSAGES, UNITS, CHOICE } = require('../constants/index');
const { InputView, OutputView } = require('../views/index');

class BaseballGame {
  #computerNumArr = [];

  constructor() {
    this.#computerNumArr = [];
  }

  play() {
    Console.print(GAME_MESSAGES.START);
    this.initGame();
    this.playGame();
  }

  initGame() {
    this.#computerNumArr = [];

    while (this.#computerNumArr.length < 3) {
      let number = Random.pickNumberInRange(1, 9);
      if (!this.#computerNumArr.includes(number))
        this.#computerNumArr.push(number);
    }
  }

  // TODO: delete the console.log
  playGame() {
    console.log('test: ', this.#computerNumArr);
    InputView.readUserNumber(this.convertStrToArr.bind(this));
  }

  convertStrToArr(userNumStr) {
    const userNumArr = userNumStr.split('').map((num) => Number(num));
    this.compareComputerWithUser(userNumArr);
  }

  // TODO:reduce the depth to 2 or less
  compareComputerWithUser(userNumArr) {
    let [ball, strike] = [0, 0];
    userNumArr.forEach((userNumber, userNumberIdx) => {
      this.#computerNumArr.map((computerNum, computerNumIdx) => {
        if (
          computerNum === Number(userNumber) &&
          computerNumIdx === userNumberIdx
        ) {
          strike++;
          return;
        }
        if (computerNum === Number(userNumber)) ball++;
      });
    });

    this.convertScoreToMessage([ball, strike]);
  }

  convertScoreToMessage([ball, strike]) {
    let resultMessage = '';

    if (strike > 0 && ball > 0) {
      resultMessage = `${ball}${UNITS.BALL} ${strike}${UNITS.STRIKE}`;
    } else if (strike > 0) {
      resultMessage = `${strike}${UNITS.STRIKE}`;
    } else if (ball > 0) {
      resultMessage = `${ball}${UNITS.BALL}`;
    } else {
      resultMessage = UNITS.NOTHING;
    }

    this.showResultMessage(resultMessage);
  }

  showResultMessage(resultMessage) {
    if (resultMessage === GAME_MESSAGES.THREE_STRIKE) {
      OutputView.print(GAME_MESSAGES.THREE_STRIKE);
      OutputView.print(GAME_MESSAGES.END);
      InputView.readUserChoice(this.askToRestart.bind(this));
    } else {
      OutputView.print(resultMessage);
      this.playGame();
    }
  }

  askToRestart(userChoice) {
    if (userChoice === CHOICE.PLAY_AGAIN) {
      OutputView.print(GAME_MESSAGES.RESTART_GAME);
      this.initGame();
      this.playGame();
    } else if (userChoice === CHOICE.EXIT) {
      OutputView.print(GAME_MESSAGES.END_GAME);
      OutputView.close();
    }
  }
}

const baseballGame = new BaseballGame();
baseballGame.play();

module.exports = BaseballGame;
