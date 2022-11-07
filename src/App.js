const MissionUtils = require("@woowacourse/mission-utils");

function checkLength(answer) {
  if (answer.length !== 3) throw new Error('숫자 세 개를 입력해주세요.');
}

function checkNumber(answer) {
  if (!parseInt(answer)) throw new Error('숫자만 입력해주세요.');
}

function checkDuplicate(answer) {
  while (answer.length > 1) {
    let target = answer.pop();
    if (answer.includes(target)) throw new Error('서로 다른 수를 입력해주세요.');
  }
}

class App {
  constructor() {
    this.computerRandomNumber = this.createRandomNumber();
    this.userAnswer = [];
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

  setUserAnswer(answerArray) {
    for (let number of answerArray) {
      this.userAnswer.push(parseInt(number));
    }
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      try {
        const removeSpace = answer.replace(/ /g, '');
        checkNumber(removeSpace);
        checkLength(removeSpace);
        const answerArray = removeSpace.split('');
        checkDuplicate(answerArray);
        this.setUserAnswer(removeSpace.split(''));
      } catch (error) {
        console.log(error);
      }
    });

  }
}
const app = new App();
app.play();
module.exports = App;
