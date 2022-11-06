class User {
  constructor() {
    this.number = [];
  }

  setNumber(userInput) {
    this.number = userInput.split('');
  }
}

module.exports = User;
