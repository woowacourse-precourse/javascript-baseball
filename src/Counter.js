class Counter {
  constructor(answer, computerNumberArr) {
    this.answer = answer;
    this.computerNumberArr = computerNumberArr;
  }
  countStrike(answer, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfAnswer = Number(answer[index]);
      if (oneLetterOfAnswer === comCurNum) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }

  countBall(answer, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfAnswer = Number(answer[index]);
      if (computerNumberArr.includes(oneLetterOfAnswer) && comCurNum !== oneLetterOfAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }
}
module.exports = Counter;
