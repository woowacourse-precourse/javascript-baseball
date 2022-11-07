class Utils {
  constructor() {}

  static #createUniqueNumberInList(array) {
    let pickedNumber = Random.pickNumberInRange(this.minNum, this.maxNum);

    while (array.includes(pickedNumber)) {
      pickedNumber = Random.pickNumberInRange(this.minNum, this.maxNum);
    }

    return pickedNumber;
  }

  static createUniqueNumbers(count) {
    const numbers = Array.from({ length: count }).reduce(
      (prev) => [...prev, Utils.#createUniqueNumberInList(prev)],
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
