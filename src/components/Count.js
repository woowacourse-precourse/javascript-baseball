class Count {
  get(userNumbers, computerNumbers) {
    const userNumArr = String(userNumbers).split('');
    const computerNumArr = computerNumbers.map(String);
    const strikeCount = this.getStrike(userNumArr, computerNumArr);
    const ballCount = this.getBall(userNumArr, computerNumArr);

    return [strikeCount, ballCount];
  }

  getStrike(userNumArr, computerNumArr) {
    return userNumArr.reduce((acc, num, i) => {
      if (num === computerNumArr[i]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  getBall(userNumArr, computerNumArr) {
    return userNumArr.reduce((acc, num, i) => {
      if (computerNumArr.includes(num) === true && num !== computerNumArr[i]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
}

module.exports = Count;