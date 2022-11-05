const MissionUtils = require('@woowacourse/mission-utils');

class App {
  firstPlay = true;

  baseballAnswer = [];

  userInput = '';

  findNewBaseballNumber(CHECK_SAME_NUMBER) {
    let newBaseballNumber = 0;
    do {
      newBaseballNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    } while (CHECK_SAME_NUMBER.has(newBaseballNumber));
    CHECK_SAME_NUMBER.add(newBaseballNumber);
    this.baseballAnswer.push(newBaseballNumber);
  }

  setBaseballAnswer() {
    this.baseballAnswer = []; // Clear the answer berfore starting a game.
    const CHECK_SAME_NUMBER = new Set();
    for (let count = 0; count < 3; count += 1) {
      this.findNewBaseballNumber(CHECK_SAME_NUMBER);
    }
  }

  static throwError(...args) {
    if (args.includes(false)) {
      throw new Error();
    }
  }

  userInputExceptionHandler() {
    const CHECK_SAME_INPUT = new Set();
    const IS_LENGTH_3 = this.userInput.length === 3;
    const INPUT_ARRAY = [...this.userInput];

    const CHECK_EXCEPTION = (input) => {
      const IS_NUMBER = input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57;
      const IS_UNIQUE = !CHECK_SAME_INPUT.has(input);
      App.throwError(IS_UNIQUE, IS_NUMBER, IS_LENGTH_3);
      CHECK_SAME_INPUT.add(input);
    };

    INPUT_ARRAY.forEach(CHECK_EXCEPTION);
  }

  increaseBaseball(digit, index) {
    let strike = 0;
    let ball = 0;
    if (+digit === this.baseballAnswer[index]) {
      strike += 1;
    } else if (this.baseballAnswer.includes(+digit)) {
      ball += 1;
    }
    return [strike, ball];
  }

  compareUserInputWithAnswer() {
    const USER_DIGITS = [...this.userInput];
    let strike = 0;
    let ball = 0;
    let nothing = false;

    const JUDGE_BASEBALL = (digit, index) => {
      const [increaseStrike, increaseBall] = this.increaseBaseball(digit, index);
      strike += increaseStrike;
      ball += increaseBall;
    };
    USER_DIGITS.forEach(JUDGE_BASEBALL);

    if (!strike && !ball) {
      nothing = true;
    }

    return [ball, strike, nothing];
  }

  static makeOutputString(ball, strike, nothing) {
    let outputString = '';
    if (ball) {
      outputString += `${ball}볼 `;
    }
    if (strike) {
      outputString += `${strike}스트라이크 `;
    }
    if (nothing) {
      outputString += '낫싱';
    }
    return outputString;
  }

  gameRestartHandler() {
    const QUERY_STRING = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    const DECISION_HANDLER = (input) => {
      App.throwError(input === '1' || input === '2');
      const NEXT_EVENT = input === '2' ? () => MissionUtils.Console.close() : () => this.play();
      NEXT_EVENT();
    };
    MissionUtils.Console.readLine(QUERY_STRING, DECISION_HANDLER);
  }

  userInputHandler = (input) => {
    this.userInput = input;
    this.userInputExceptionHandler();

    const [BALL, STRIKE, NOTHING] = this.compareUserInputWithAnswer();
    const OUTPUT_STRING = App.makeOutputString(BALL, STRIKE, NOTHING);
    MissionUtils.Console.print(OUTPUT_STRING);

    const END_GAME = () => {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.gameRestartHandler();
    };

    const RESTART_GAME = () => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', this.userInputHandler);
    };

    const NEXT_EVENT = STRIKE === 3 ? END_GAME : RESTART_GAME;
    NEXT_EVENT();
  };

  play() {
    if (this.firstPlay) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.firstPlay = false;
    this.setBaseballAnswer();
    // test----------------
    // MissionUtils.Console.print(this.baseballAnswer);
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', this.userInputHandler);
  }
}

try {
  const app = new App();
  app.play();
} catch {
  MissionUtils.Console.close();
}

module.exports = App;
