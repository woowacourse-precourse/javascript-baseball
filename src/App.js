const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;
class App {
  play() {}

  randomGenerator() {
    const ret = [];
    while (ret.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (ret.indexOf(num) === -1) ret.push(num);
    }
    return ret;
  }

  checkError(query) {
    if (this.hasError(query)) throw new Error('사용자 인풋 에러');
  }

  hasError(query) {
    const queryArr = this.getQueryArrFromQuery(query);
    if (queryArr.length > 3) return true;
    queryArr.forEach((num) => {
      if (Number(num) < 1 || Number(num) > 9) return true;
    });
    const querySet = new Set(queryArr);
    if (querySet.size !== 3) return true;
    return false;
  }
}

module.exports = App;
