class Input {
  static isValidGuess(userInput) {
    if (userInput.length !== 3) throw new Error("3자리 숫자를 입력해주세요.");

    const userInputArr = Array.from(userInput);
    userInputArr.every((char) => this.checkNumber(Number(char)));
    userInputArr.every((char) => this.checkRange(Number(char)));

    const numbers = new Set();
    userInputArr.forEach((number) => {
      numbers.add(number);
    });
    if (numbers.size < 3) throw new Error("중복되지 않는 숫자를 입력해주세요.");

    return true;
  }

  static checkNumber(number) {
    if (isNaN(number)) throw new Error("숫자를 입력해주세요.");
  }

  static checkRange(number) {
    if (number < 1 || number > 9)
      throw new Error("1~9 사이의 숫자를 입력해주세요.");
  }

  static isOneOrTwo(userInput) {
    if (userInput !== "1" && userInput !== "2")
      throw new Error("1 또는 2를 입력해주세요.");

    return true;
  }
}

module.exports = Input;
