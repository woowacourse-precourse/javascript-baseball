const MissionUtils = require('@woowacourse/mission-utils');

const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_GUESS: '숫자를 입력해주세요 : ',
  NOTHING: '낫싱',
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  INPUT_GAME_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  WRONG_INPUT: '잘못된 입력입니다.',
};

class App {
  play() {
    this.printGameStartMessage();
    this.startGame();
  }

  startGame() {
    this.generateAnswer();
    this.processGuess();
  }

  exitGame() {
    MissionUtils.Console.close();
  }

  printGameStartMessage() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  }

  generateAnswer() {
    this.answer = '';
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

  processGuess() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_GUESS, (input) => {
      this.guess = input;
      this.checkGuessInput();
      this.calculateBallCount();
      this.printBallCount();
      if (this.ballCount.strike === 3) {
        this.printGameEndMessage();
        this.processGameEnd();
        return;
      }
      this.processGuess();
    });
  }

  checkGuessInput() {
    if (
      this.guess.length !== 3
      || new Set(this.guess).size !== 3
      || [...this.guess].some((number) => number < '1' || number > '9')
    ) {
      throw new Error(MESSAGE.WRONG_INPUT);
    }
  }

  calculateBallCount() {
    const ballCount = { ball: 0, strike: 0 };

    [...this.guess].forEach((number, index) => {
      if (this.answer.indexOf(number) === index) {
        ballCount.strike += 1;
      } else if (this.answer.includes(number)) {
        ballCount.ball += 1;
      }
    });

    this.ballCount = ballCount;
  }

  printBallCount() {
    const { ball, strike } = this.ballCount;

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print(MESSAGE.NOTHING);
    } else if (ball === 0) {
      MissionUtils.Console.print(MESSAGE.STRIKE(strike));
    } else if (strike === 0) {
      MissionUtils.Console.print(MESSAGE.BALL(ball));
    } else {
      MissionUtils.Console.print(MESSAGE.BALL_STRIKE(ball, strike));
    }
  }

  printGameEndMessage() {
    MissionUtils.Console.print(MESSAGE.GAME_END);
  }

  processGameEnd() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_GAME_END, (input) => {
      this.gameEnd = input;
      this.checkGameEndInput();
      this.handleGameEnd();
    });
  }

  checkGameEndInput() {
    if (this.gameEnd !== '1' && this.gameEnd !== '2') {
      throw new Error(MESSAGE.WRONG_INPUT);
    }
  }

  handleGameEnd() {
    if (this.gameEnd === '1') {
      this.startGame();
    } else if (this.gameEnd === '2') {
      this.exitGame();
    }
  }
}

module.exports = App;
