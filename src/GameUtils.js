class GameUtils {
  constructor() {}

  static userInputToNumberArr(text) {
    const splitString = text.split("");
    let userInputArr = [];
    splitString.forEach((char, index) => (userInputArr[index] = Number(char)));

    return userInputArr;
  }
}

module.exports = GameUtils;
