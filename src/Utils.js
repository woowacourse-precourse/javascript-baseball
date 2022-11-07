const MissionUtils = require("@woowacourse/mission-utils");
const { Random } = MissionUtils;

class Utils {
  constructor() {}

  static #createUniqueNumberInList({ array, minNumber, maxNumber }) {
    let pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);

    while (array.includes(pickedNumber)) {
      pickedNumber = Random.pickNumberInRange(minNumber, maxNumber);
    }

    return pickedNumber;
  }

  static createUniqueNumbers({ count, minNumber, maxNumber }) {
    const numbers = Array.from({ length: count }).reduce(
      (prev) => [
        ...prev,
        Utils.#createUniqueNumberInList({ array: prev, minNumber, maxNumber }),
      ],
      []
    );

    return numbers;
  }

  static isNumber(value) {
    return typeof value === "number";
  }

  static hasDuplicateElmentInList(list) {
    return [...new Set(list)].length !== list.length;
  }
}

module.exports = Utils;
