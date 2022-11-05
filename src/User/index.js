class User {
  #InputNums;

  constructor() {
    this.resetUser();
  }

  getInputNums() {
    return this.#InputNums;
  }

  async setInputNums(query, callBack) {
    let inputs = await callBack(query);
    Validate.isVaildate(inputs);
    this.#InputNums = inputs.split('').map((num) => Number(num));
  }

  resetUser() {
    this.#InputNums = [];
  }
}

module.exports = User;
