const Console = require("../utils/Console");
const Random = require("../utils/Random");

class Utils {
  constructor() {}

  static checkNumberisOk(userInputNumber) {
    const userInputNumberLength = userInputNumber.toString().length;
    if (Utils.#isNotNumber(userInputNumber) && userInputNumberLength !== 3) {
      throw new Error("입력의 길이와 숫자인지 확인하세요!");
    }

    if (Utils.#isNotNumber(userInputNumber)) {
      throw new Error("숫자를 입력하세요!");
    }
    if (userInputNumberLength !== 3) {
      throw new Error("숫자를 3자리 입력하세요!");
    }

    if (Utils.#hasDuplicatedNumber(userInputNumber)) {
      throw new Error("중복된 숫자를 입력하였습니다!");
    }

    if (Utils.#hasNumber0(userInputNumber)) {
      throw new Error("0을 입력하였습니다!");
    }
    return true;
  }

  static #isNotNumber(number) {
    return typeof number !== "number";
  }
  static #hasDuplicatedNumber(number) {
    let numberLength = number.toString().length;
    return numberLength !== [...new Set([...number.toString()])].length;
  }

  static #hasNumber0(number) {
    return number.toString().includes("0");
  }
}

module.exports = Utils;
