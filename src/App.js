const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;
const { Console } = MissionUtils;

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    try {
      this.createAnswer();
    } catch {
      throw new Error();
    }
  }

  createAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const ANSWER = Random.pickNumberInRange(1, 9);

      if (!this.answer.includes(ANSWER)) {
        this.answer.push(ANSWER);
      }
    }
    console.log(this.answer);
    return this.enterNumber();
  }

  enterNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      return this.inputCheck(input);
    });
  }

  inputCheck(inputNumber) {
    const ONLYNUMBER = /^[1-9]+$/;
    if (inputNumber.length !== 3) throw new Error('숫자 3자리를 입력해주세요.');

    const INPUT_ARRAY = inputNumber.split('').map((number) => {
      if (!ONLYNUMBER.test(number)) throw new Error('숫자를 입력해주세요.');
      return parseInt(number, 10);
    });
    const SET = new Set(INPUT_ARRAY);
    const DEDUPLICATION = [...SET];

    if (DEDUPLICATION.length !== 3)
      throw new Error('중복된 값은 입력할 수 없습니다.');

    return this.compare(INPUT_ARRAY);
  }

  compare(inputArr) {
    const ANSWER_ARRAY = this.answer;
    this.ball = 0;
    this.strike = 0;
    inputArr.map((number, index) => {
      if (ANSWER_ARRAY.includes(number) && number === ANSWER_ARRAY[index])
        this.strike += 1;
      if (ANSWER_ARRAY.includes(number) && number !== ANSWER_ARRAY[index])
        this.ball += 1;
    });
    return this.compareResult();
  }

  compareResult() {
    let resultText = '';
    const BALL = this.ball;
    const STRIKE = this.strike;

    if (BALL !== 0) resultText += `${BALL}볼 `;
    if (STRIKE !== 0) resultText += `${STRIKE}스트라이크`;
    if (resultText === '') resultText += '낫싱';
    Console.print(resultText);
    return this.judgeResult(STRIKE === 3);
  }

  judgeResult(threeStrike) {
    if (threeStrike) return this.endingOption();
    if (!threeStrike) return this.enterNumber();
  }

  endingOption() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (input) => {
        return this.selectOption(input);
      }
    );
  }

  selectOption(input) {
    if (input === '1') return this.play();
    if (input === '2') return Console.close();
    throw new Error('정해진 값을 입력해주세요.');
  }
}
const app = new App();
app.play();
module.exports = App;
