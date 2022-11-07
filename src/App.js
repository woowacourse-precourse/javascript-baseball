const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR } = require('./messages');
const { RESTART } = require('./constains');

class App {
  printStart() {
    MissionUtils.Console.print(MESSAGE.START);
  }

  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  isCorrectInput(value) {
    const regExp = /^[1-9]{3}$/;
    if (!regExp.test(value))
      throw new Error(ERROR.NOT_THREE_NUMBER);

    const overlapReg = /(.)\1+/;
    if (overlapReg.test(value))
      throw new Error(ERROR.NOT_OVERLAP_NUMBER);

    const differenceReg = /(.)\d\1/;
    if (differenceReg.test(value)) {
      throw new Error(ERROR.NOT_DIFFERENCE_NUMBER);
    }
  }

  isCorrectRestartInput(value) {
    const regExp = /^[1-2]{1}$/;
    if (!regExp.test(value))
      throw new Error(ERROR.INVAID_RESTART_TYPE);
  }

  stringToAnswerType(value) {
    return value.split('').map(Number);
  }

  compare(answer, input) {
    let result = {
      strike: 0,
      ball: 0,
      nothing: 0,
    }

    for (let index = 0; index < input.length; index++) {
      if (input[index] === answer[index]) {
        result.strike += 1;
        continue;
      }
      if (answer.includes(input[index])) {
        result.ball += 1;
        continue;
      }
      result.nothing += 1;
    }
    return result;
  }

  printResult(result) {
    if (result.strike === 3) {
      MissionUtils.Console.print(MESSAGE.THREE_STRIKE);
      return;
    }

    if (result.nothing === 3) {
      MissionUtils.Console.print(MESSAGE.NOTHING);
      return;
    }

    MissionUtils.Console.print(`${result.ball}${MESSAGE.BALL} ${result.strike}${MESSAGE.STRIKE}`);
  }

  isAnswer(result) {
    return result.strike === 3;
  }

  askRestart() {
    MissionUtils.Console.print(MESSAGE.CONGRATULATION);

    MissionUtils.Console.readLine(MESSAGE.RESTART, (input) => {
      this.isCorrectRestartInput(input);

      if (input === RESTART.YES)
        this.newGame();

      if (input === RESTART.NO)
        MissionUtils.Console.close();
    })
  }

  guessAnswer(answer) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_NUMBER, (input) => {
      this.isCorrectInput(input);

      input = this.stringToAnswerType(input);
      let result = this.compare(answer, input);
      this.printResult(result);

      this.isAnswer(result) ? this.askRestart() : this.guessAnswer(answer);
    });
  }

  newGame() {
    let answer = this.makeAnswer();
    console.log(answer);
    this.guessAnswer(answer)
  }

  play() {
    this.printStart();
    this.newGame();
  }
}

const app = new App();
app.play();

module.exports = App;
