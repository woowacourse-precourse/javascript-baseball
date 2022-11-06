const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;
const STRIKE = 1;
const BALL = 0;
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

  getScore(answer, query) {
    const queryArr = this.getQueryArrFromQuery(query);
    let strike = 0;
    let ball = 0;
    answer.forEach((num, idx) => {
      const hasNumber = queryArr.indexOf(num.toString());
      if (hasNumber === idx) strike += 1;
      else if (hasNumber !== -1) ball += 1;
    });
    return [ball, strike];
  }

  getQueryArrFromQuery(query) {
    return query.toString().split('');
  }

  printFeedback(score) {
    const ballFeedback = (score[BALL] && `${score[BALL]}볼 `) || '';
    const strikeFeedback = (score[STRIKE] && `${score[STRIKE]}스트라이크`) || '';
    Console.print(ballFeedback + strikeFeedback || '낫싱');
  }

  isFinish(score) {
    if (score[STRIKE] === 3) return true;
    return false;
  }
}

module.exports = App;
