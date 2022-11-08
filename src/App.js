const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./constant');
const { restartEndGameAnswerValidator, guessAnswerValidate } = require('./utils/validation');
const getRandomNumbers = require('./utils/generate-random-number');
const scoreConversion = require('./utils/score-conversion');

class App {
  constructor() {
    this.firstEnter = true;
  }

  guessAnswer() {
    Console.readLine(OUTPUT_MESSAGE.ENTER_NUMBER, (answer) => {
      guessAnswerValidate(answer);
      if (this.outputResult(answer) === OUTPUT_MESSAGE.CORRECT_ANSWER) {
        Console.print(this.outputResult(answer));
        this.restartEndGameAnswer();
        return;
      }
      Console.print(this.outputResult(answer));
      this.guessAnswer();
    });
  }

  restartEndGameAnswer() {
    Console.readLine(OUTPUT_MESSAGE.RESTART_ENDGAME_ENTER_NUMBER, (answer) => {
      restartEndGameAnswerValidator(answer);
      if (answer === '1') {
        this.play();
        return;
      }
      Console.print(OUTPUT_MESSAGE.END_GAME);
      Console.close();
    });
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

    return scoreConversion(strike, ball);
  }

  play() {
    if (this.firstEnter) {
      Console.print(OUTPUT_MESSAGE.START_GAME);
      this.firstEnter = false;
    }
    this.computer = getRandomNumbers();
    this.guessAnswer();
  }
}

module.exports = App;
