const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.answer = this._getRandomsStr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  }

  _getRandomsStr(numbers, size) {
    const pickNums = [];

    while (pickNums.length < size) {
      const pickNum = MissionUtils.Random.pickNumberInList(numbers);
      numbers.splice(numbers.indexOf(pickNum), 1);
      pickNums.push(pickNum);
    }

    return pickNums.join('');
  }
}

module.exports = App;
