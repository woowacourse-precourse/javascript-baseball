const Validate = require('../utils/Validate');

class User {
  #InputNums;

  constructor() {
    this.resetUser();
  }

  getInputNums() {
    return this.#InputNums;
  }
  setInputNums(value) {
    let inputs = value;
    Validate.isVaildate(inputs);
    this.#InputNums = inputs.split('').map((num) => Number(num));
  }

  resetUser() {
    this.#InputNums = [];
  }
}

module.exports = User;
