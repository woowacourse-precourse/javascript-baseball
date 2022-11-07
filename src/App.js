const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.answer = this._getRandomsStr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  }

  _getRandomsStr(numbers, size) {
    const pickNums = [];

    while (pickNums.length < size) {
      const pickNum = Random.pickNumberInList(numbers);
      numbers.splice(numbers.indexOf(pickNum), 1);
      pickNums.push(pickNum);
    }

    return pickNums.join('');
  }

  getUserInput(cbFn) {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.readLine('숫자를 입력해주세요 : ', cbFn);
  }
}

const a = new App();
a.play();

module.exports = App;
