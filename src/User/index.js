class User {
  #InputNums;

  constructor() {
    this.resetUser();
  }

  resetUser() {
    this.#InputNums = [];
  }
}

module.exports = User;
