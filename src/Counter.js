class Counter {
  constructor(inputNumber, computerNumberArr) {
    this.inputNumber = inputNumber;
    this.computerNumberArr = computerNumberArr;
  }
  countStrike(inputNumber, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfInputNumber = Number(inputNumber[index]);
      if (oneLetterOfInputNumber === comCurNum) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }

  countBall(inputNumber, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfInputNumber = Number(inputNumber[index]);
      if (
        computerNumberArr.includes(oneLetterOfInputNumber) &&
        comCurNum !== oneLetterOfInputNumber
      ) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalCount;
  }
}
module.exports = Counter;
