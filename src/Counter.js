class Counter {
  constructor(userNumberStr, computerNumberArr) {
    this.userNumberStr = userNumberStr;
    this.computerNumberArr = computerNumberArr;
  }
  countStrike(userNumberStr, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfuserNumberStr = Number(userNumberStr[index]);
      oneLetterOfuserNumberStr === comCurNum ? count + 1 : count;
      if (oneLetterOfuserNumberStr === comCurNum) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }

  countBall(userNumberStr, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfuserNumberStr = Number(userNumberStr[index]);
      if (
        computerNumberArr.includes(oneLetterOfuserNumberStr) &&
        comCurNum !== oneLetterOfuserNumberStr
      ) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }
}
module.exports = Counter;
