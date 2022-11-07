const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, ERROR_MESSAGE, GENERATE_RANGE } = require('./constant');
class App {
  constructor() {
    this.firstEnter = true;
  }

  getRandomNumbers() {
    const Numbers = [];
    while (Numbers.length < GENERATE_RANGE.MAX_SIZE) {
      const number = MissionUtils.Random.pickNumberInRange(
        GENERATE_RANGE.MINIMUM_VALUE,
        GENERATE_RANGE.MAXIMUM_VALUE
      );
      if (!Numbers.includes(number)) {
        Numbers.push(number);
      }
    }

    return Numbers;
  }

  guessAnswer() {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.ENTER_NUMBER, (answer) => {
      this.guessAnswerValidate(answer);
      if (this.outputResult(answer) === OUTPUT_MESSAGE.CORRECT_ANSWER) {
        MissionUtils.Console.print(this.outputResult(answer));
        this.restartEndGameAnswer();
        return;
      }
      MissionUtils.Console.print(this.outputResult(answer));
      return this.guessAnswer();
    });
  }

  guessAnswerValidate(answer) {
    const duplicate = new Set(answer);
    if (answer.length !== 3) {
      throw ERROR_MESSAGE.DIFFERENT_NUMBERS;
    }
    if (answer.length !== duplicate.size) {
      throw ERROR_MESSAGE.DIFFERENT_NUMBERS;
    }
    if (
      !answer.split('').every((number) => number.charCodeAt() >= 49 && number.charCodeAt() <= 57)
    ) {
      throw ERROR_MESSAGE.OUT_OF_RANGE;
    }
  }

  restartEndGameAnswer() {
    MissionUtils.Console.readLine(OUTPUT_MESSAGE.RESTART_ENDGAME_ENTER_NUMBER, (answer) => {
      this.restartEndGameAnswerValidator(answer);
      if (answer === '1') {
        this.play();
        return;
      }
      MissionUtils.Console.close();
      return;
    });
  }

  restartEndGameAnswerValidator(answer) {
    if (answer.length !== 1) {
      throw ERROR_MESSAGE.ONLY_NUMBER;
    }
    if (!(answer.charCodeAt() >= 49 && answer.charCodeAt() <= 50)) {
      throw ERROR_MESSAGE.OUT_OF_RANGE;
    }
  }

  outputResult(answer) {
    let strike = 0;
    let ball = 0;

    answer.split('').forEach((number, index) => {
      const computer = String(this.computer[index]);
      if (computer === number) {
        strike += 1;
      }
      if (computer !== number && String(this.computer).includes(number)) {
        ball += 1;
      }
    });

    return this.scoreConversion(strike, ball);
  }

  scoreConversion(strike, ball) {
    if (strike === 0 && ball === 0) {
      return OUTPUT_MESSAGE.NOTHING;
    }
    if (strike === 3) {
      return OUTPUT_MESSAGE.CORRECT_ANSWER;
    }
    if (ball > 0 && strike > 0) {
      return `${ball}${OUTPUT_MESSAGE.BALL} ${strike}${OUTPUT_MESSAGE.STRIKE}`;
    }
    if (ball > 0 && strike === 0) {
      return `${ball}${OUTPUT_MESSAGE.BALL}`;
    }
    if (strike > 0 && ball === 0) {
      return `${strike}${OUTPUT_MESSAGE.STRIKE}`;
    }
  }

  play() {
    if (this.firstEnter === true) {
      MissionUtils.Console.print(OUTPUT_MESSAGE.START_GAME);
      this.firstEnter = false;
    }
    this.computer = this.getRandomNumbers();
    this.guessAnswer();
  }
}

module.exports = App;
