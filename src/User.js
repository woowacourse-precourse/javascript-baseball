class User {
  constructor() {
    this.number = [];
  }

  setUserNumber(number) {
    this.number = number.split("");
    this.numbersValidation(this.number);
  }

  numbersValidation(numbers) {
    if (numbers.length <= 3) this.rangeErrorValidation(numbers);
    else {
      throw "올바르지 못한 숫자 입력입니다1.";
    }
  }

  rangeErrorValidation(numbers) {
    numbers.reduce((acc, cur) => {
      if (!acc.includes(cur) && cur >= 1 && cur <= 9) {
        acc.push(cur);
        return acc;
      }
      throw "올바르지 못한 숫자 입력입니다2.";
    }, []);
  }
}

module.exports = User;
