const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.correctAnswer = this.setNumber();
  }
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.selectNumber();
  }

  print(str) {
    return MissionUtils.Console.print(str);
  }
  setNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  selectNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      let exception = this.handleException(answer);
      if (exception) {
        throw new Error('3자리 숫자를 중복없이 정확히 입력해주세요.');
      } else {
        const result = this.solve(answer);
        if (result[1] === 3) {
          this.print('3개의 숫자를 모두 맞히셨습니다!');
          this.print('게임 종료');
          return this.reStart();
        } else {
          if (result[1] === 0 && result[0] === 0) {
            this.selectNumber();
            return this.print('낫싱');
          } else if (result[1] || result[0]) {
            this.selectNumber();
            return this.resultMessage(result);
          }
        }
      }
    });
  }
  resultMessage(result) {
    let ball = result[0] ? `${result[0]}볼` : '';
    let strike = result[1] ? `${result[1]}스트라이크` : '';
    let messages = ball && strike ? ball + ' ' + strike : ball + strike;
    this.print(messages);
  }
  reStart() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        if (answer === '1') {
          this.correctAnswer = this.setNumber();
          this.selectNumber();
        } else {
          this.gameOver();
        }
      }
    );
  }
  solve(numbers) {
    const copyCorrectAnswer = this.correctAnswer;
    const userAnswer = [...numbers];
    const checkStrike = copyCorrectAnswer.filter(
      (el, idx) => el != userAnswer[idx]
    );
    const strike = 3 - checkStrike.length;
    let ball = 0;
    userAnswer.forEach((el) => checkStrike.includes(Number(el)) && ball++);

    return [ball, strike];
  }
  handleException(answer) {
    const checkNumber = /[^0-9]/g;
    let checkNumberOver = false;
    for (let i = 0; i < answer.length; i++) {
      const answerCopy = [...answer];
      const splice = answerCopy.splice(i, 1);
      if (answerCopy.includes(...splice)) {
        checkNumberOver = true;
      }
    }
    if (!(answer.length === 3) || checkNumber.test(answer) || checkNumberOver) {
      return true;
    }
    return false;
  }
  gameOver() {
    return MissionUtils.Console.close();
  }
}
const app = new App();
app.play();

module.exports = App;
