class Validation {
  constructor(length) {
    this.length = length;
    this.array = [];
  }

  validation(input) {
    if (isNaN(input)) throw new Error("정수 값을 입력해주세요!");

    const len = Math.ceil(Math.log10(input + 1));
    if (len !== 3) throw new Error("서로 다른 3자리의 수를 입력해주세요!");

    this.isDuplicate(input);

    if (input < 0) throw new Error("음수가 아닌 값을 입력해주세요.");
    return this.array;
  }

  isDuplicate(input) {
    const checkArray = Array(10).fill(false);
    this.array = this.inputToArray(input);

    for (let i = 0; i < this.length; i++) {
      let idx = this.array[i];
      if (checkArray[idx]) throw new Error("중복이 있습니다.");

      checkArray[idx] = true;
    }
  }

  inputToArray(input) {
    const array = [];

    while (input > 0) {
      array.unshift(input % 10);
      input = Math.floor(input / 10);
    }

    return array;
  }
}

module.exports = Validation;
