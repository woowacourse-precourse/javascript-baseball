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

function checkZero(answer) {
  if (answer.includes('0')) throw new Error('1~9 사이 수를 입력해주세요.');
}

class App {
  constructor() {
    this.computerNumber = this.createComputerNumber();
    this.strike = 0;
    this.ball = 0;
  }

  createComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const removeSpace = answer.replace(/ /g, '');
      checkNumber(removeSpace);
      checkLength(removeSpace);
      const answerArray = removeSpace.split('');
      checkDuplicate(answerArray);
      checkZero(answerArray);
      this.calcBallAndStrike(answerArray, this.computerNumber);
    });
  }

  calcBallAndStrike(userAnswer, computerNumber) {
    this.strike = 0;
    this.ball = 0;

    for (let idx = 0; idx < userAnswer.length; idx++) {
      let userNum = parseInt(userAnswer[idx]);
      if (userNum === computerNumber[idx]) this.strike++;
      else if (computerNumber.includes(userNum)) this.ball++;
    }
    this.printResult();
    return [this.ball, this.strike];
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
      checkNumber(answer);
      if (answer === '2') MissionUtils.Console.close();
      else if (answer === '1') {
        this.computerNumber = this.createComputerNumber();
        this.getUserNumber();
      }
      else {
        throw new Error('1 또는 2만 입력해주세요.');
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
