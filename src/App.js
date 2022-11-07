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
    this.userAnswer = [];
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
    MissionUtils.Console.print(computerRandomNumber);
    return computerRandomNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const removeSpace = answer.replace(/ /g, '');
      checkNumber(removeSpace);
      checkLength(removeSpace);
      const answerArray = removeSpace.split('');
      checkDuplicate(answerArray);
      this.compareTwoArray(answerArray);
    });
  }

  compareTwoArray(userAnswer) {
    this.strike = 0;
    this.ball = 0;

    for (let idx = 0; idx < userAnswer.length; idx++) {
      let userNum = parseInt(userAnswer[idx]);
      if (userNum === this.computerRandomNumber[idx]) this.strike++;
      else if (this.computerRandomNumber.includes(userNum)) this.ball++;
    }
    this.printResult();
  }

  printResult() {
    let printStatement = '';
    if (this.ball > 0) printStatement = this.ball + BALL_PHRASE + ' ';
    if (this.strike > 0) printStatement += this.strike + STRIKE_PHRASE;
    if (printStatement.length === 0) printStatement = NOTHING_PHRASE;
    MissionUtils.Console.print(printStatement);
    this.decideReplay();
  }


  decideReplay() {
    if (this.strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.decideRestart();
    }
    else {
      this.getUserNumber();
    }
  }

  decideRestart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      try {
        checkNumber(answer);
        if (answer === '2') MissionUtils.Console.close();
        else if (answer === '1') {
          this.computerRandomNumber = this.createRandomNumber();
          this.getUserNumber();
        }
        else {
          throw new Error('1 또는 2만 입력해주세요.');
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getUserNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
