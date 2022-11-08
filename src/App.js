const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_LENGTH = 3;
const RESTART_CODE = "1";
const EXIT_CODE = "2";
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const BALL_STRING = "볼";
const STRIKE_STRING = "스트라이크";
const NOTHING_STRING = "낫싱";
const CORRECT_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_MESSAGE = `게임을 새로 시작하려면 ${RESTART_CODE}, 종료하려면 ${EXIT_CODE}를 입력하세요.`;

class App {
  constructor() {
    this.score = { ball: 0, strike: 0 };
    this.answer = [];
    this.playerInput = [];
  }

  play() {
    this.printMessage(START_MESSAGE);
    this.startGame();
  }

  startGame() {
    this.getRandomNumber();
    this.getPlayerInput();
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  getRandomNumber() {
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  getPlayerInput() {
    MissionUtils.Console.readLine(INPUT_MESSAGE, (input) => {
      this.checkInput(input);
      this.checkAnswer();
      this.printScore();
    });
  }

  checkInput(input) {
    let element;
    this.playerInput = [];

    if (input.length !== NUMBER_LENGTH) {
      throw new Error(`${NUMBER_LENGTH}자리 숫자를 입력해 주세요`);
    }

    for (let index = 0; index < NUMBER_LENGTH; index++) {
      element = Number(input[index]);
      if (isNaN(element)) {
        throw new Error("숫자만 입력해 주세요");
      }
      if (!this.playerInput.includes(element)) {
        this.playerInput.push(element);
      } else {
        throw new Error("각 숫자는 중복되지 않아야합니다");
      }
    }
  }

  checkAnswer() {
    this.score = { ball: 0, strike: 0 };

    for (let index = 0; index < NUMBER_LENGTH; index++) {
      if (this.playerInput[index] === this.answer[index]) {
        this.score.strike++;
      } else if (this.answer.includes(this.playerInput[index])) {
        this.score.ball++;
      }
    }
  }

  printScore() {
    if (this.score.strike === 0 && this.score.ball === 0) {
      this.printMessage(NOTHING_STRING);
    } else if (this.score.strike !== 0 && this.score.ball !== 0) {
      this.printMessage(
        this.score.ball + BALL_STRING + " " + this.score.strike + STRIKE_STRING
      );
    } else {
      if (this.score.strike) {
        this.printMessage(this.score.strike + STRIKE_STRING);
      } else {
        this.printMessage(this.score.ball + BALL_STRING);
      }
    }

    if (this.score.strike === NUMBER_LENGTH) {
      this.printMessage(CORRECT_MESSAGE);
      this.getRestartInput();
    } else {
      this.getPlayerInput();
    }
  }

  getRestartInput() {
    MissionUtils.Console.readLine(RESTART_MESSAGE, (input) => {
      if (input === EXIT_CODE) {
        return;
      } else if (input !== RESTART_CODE) {
        throw new Error(RESTART_MESSAGE);
      }
      this.answer = [];
      this.startGame();
    });
  }
}

module.exports = App;
