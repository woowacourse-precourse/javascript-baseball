const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.answer = this._getRandomsStr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    this.getUserInput(this.validate);
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

  isDuplicated(input) {
    const numberSet = new Set([...input]);

    return numberSet.size === 3;
  }

  evaluate(input) {}

  validate(input) {
    const regExp = new RegExp(/^[1-9]{1,3}$/);

    try {
      if (regExp.test(input) && !this.isDuplicated(input)) {
        // 입력값이 3자리 숫자이고, 중복숫자가 없다면 다음 힌트제공 기능을 이용한다.
        this.evaluate(input);
      } else {
        // 입력이 잘못되었다면 예외를 발생시키고 게임을 종료시킨다.
      }
    } catch (e) {}
  }
}

module.exports = App;
