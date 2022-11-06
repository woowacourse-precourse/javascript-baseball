const MissionUtils = require('@woowacourse/mission-utils');

class App {
  createNumberList() {
    const numberList = [];
    while (numberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberList.includes(number)) numberList.push(number);
    }
    return numberList;
  }

  printStartPhrase() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  receiveNumber() {
    MissionUtils.Console.readLine(
      '숫자를 입력해주세요 : ',
      this.compareNumbers.bind(this)
    );
  }

  throwException(input) {
    if (input.length !== 3 || isNaN(input)) throw 'Error';
    input.split('').reduce((acc, cur) => {
      if (acc.includes(cur)) throw 'Error';
      return acc + cur;
    }, '');
  }

  compareNumbers(input) {
    this.throwException(input);
    const answerNumberList = this.createNumberList();
    const inputNumberList = input.split('').map((number) => Number(number));
    const result = { 볼: 0, 스트라이크: 0 };

    inputNumberList.forEach((number, idx) => {
      if (number === answerNumberList[idx]) result.스트라이크 += 1;
      else if (answerNumberList.includes(number)) result.볼 += 1;
    });
  }

  play() {
    this.printStartPhrase();
    this.receiveNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
