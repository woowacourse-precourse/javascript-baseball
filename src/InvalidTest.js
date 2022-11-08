class InvalidTest {
  static isNumber(input) {
    if (isNaN(input)) {
      throw "숫자만 입력하세요!";
    } else {
      return true;
    }
  }
  static isThreeNumber(input) {
    if (input.length !== 3) {
      throw "3자리 숫자만 입력하세요!";
    } else {
      return true;
    }
  }
  static isHaveZero(input) {
    const numberList = input.split("");
    if (numberList.includes("0")) {
      throw "1~9 사이의 숫자를 입력하세요!";
    } else {
      return true;
    }
  }
  static isSameNumber(input) {
    const numberList = [];
    const inputList = String(input).split("");
    inputList.map((number) => {
      if (numberList.includes(number)) {
        throw "서로 다른 숫자를 입력해주세요!";
      } else {
        numberList.push(number);
      }
    });
    return true;
  }
  static isOneOrTwo(input) {
    if (input !== "1" || input !== "2") {
      throw "잘못된 입력입니다! 프로그램을 종료합니다.";
    }
    return true;
  }
}

module.exports = InvalidTest;
