const MissionUtils = require("@woowacourse/mission-utils");
const STRIKE_PHRASE = '스트라이크';
const BALL_PHRASE = '볼';
const NOTHING_PHRASE = '낫싱';

function checkLength(answer) {
  if (answer.length !== 3) throw new Error('숫자 세 개를 입력해주세요.');
}

function checkNumber(answer) {
  if (!parseInt(answer)) throw new Error('숫자만 입력해주세요.');
}

function checkDuplicate(answer) {
  const set = new Set(answer);
  if (set.size !== 3) throw new Error('서로 다른 수를 입력해주세요.');
}

class App {
  constructor() {
    this.computerRandomNumber = this.createRandomNumber();
    this.strike = 0;
    this.ball = 0;
  }

  createRandomNumber() {
    const computerRandomNumber = [];
    while (computerRandomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNumber.includes(number)) {
        computerRandomNumber.push(number);
      }
    }
    return computerRandomNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      try {
        const removeSpace = answer.replace(/ /g, '');
        checkNumber(removeSpace);
        checkLength(removeSpace);
        const answerArray = removeSpace.split('');
        checkDuplicate(answerArray);
        this.compareTwoArray(answerArray);
      } catch (error) {
        console.log(error);
      }
    });
  }

  compareTwoArray(userAnswer) {
    this.strike = 0;
    this.ball = 0;

    for (let idx = 0; idx < userAnswer.length; idx++) {
      let userNum = userAnswer[idx];
      if (userNum === this.computerRandomNumber[idx]) this.strike++;
      else if (this.computerRandomNumber.includes(userNum)) this.ball++;
    }
    this.printResult();
  }

  printResult() {
    let printStatement = '';
    if (this.ball > 0) printStatement = this.ball + BALL_PHRASE;
    if (this.strike > 0) printStatement += this.strike + STRIKE_PHRASE;
    if (printStatement.length === 0) printStatement = NOTHING_PHRASE;
    MissionUtils.Console.print(printStatement);
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

  }
}
const app = new App();
app.play();
module.exports = App;
