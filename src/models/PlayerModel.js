class PlayerModel {
  #userInputArray;

  inputToArray(input) {
    const array = [];
    let value = Number(input);
    while (value > 0) {
      array.unshift(value % 10);
      value = Math.floor(value / 10);
    }

    this.#userInputArray = [...array];
  }

  getUserInputArray() {
    const inputArray = [...this.#userInputArray];

    return inputArray;
  }
}

module.exports = PlayerModel;
