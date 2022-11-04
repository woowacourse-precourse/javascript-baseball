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
      this.throwError(IS_UNIQUE, IS_NUMBER, IS_LENGTH_3);
      CHECK_SAME_INPUT.add(input);
    };

    INPUT_ARRAY.forEach(CHECK_EXCEPTION);
  }

  compareUserInputWithAnswer() {}

  makeOutputString(ball, strike, nothing) {}

  gameRestartHandler() {}

  userInputHandler = (input) => {
    this.userInput = input;
    this.userInputExceptionHandler();

    const [BALL, STRIKE, NOTHING] = this.compareUserInputWithAnswer();
    const OUTPUT_STRING = this.makeOutputString(BALL, STRIKE, NOTHING);
    MissionUtils.Console.print(OUTPUT_STRING);

    if (STRIKE !== 3) {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', this.userInputHandler);
    } else if (STRIKE === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.gameRestartHandler();
    }
  };

  play() {
    if (this.firstPlay) {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.firstPlay = false;
    this.setBaseballAnswer();
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
