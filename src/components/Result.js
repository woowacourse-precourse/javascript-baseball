class Result {
  get(strike, ball) {
    let result = '';
    if (strike === 3) {
      result = 'answer';
    } else if (strike === 0 && ball === 0) {
      result = 'nothing';
    } else if (strike === 0 && ball !== 0) {
      result = `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      result = `${strike}스트라이크`;
    } else if (strike !== 0 && ball !== 0) {
      result = `${ball}볼 ${strike}스트라이크`;
    }

    return result;
  }
}

module.exports = Result;