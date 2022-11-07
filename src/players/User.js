class User {
  constructor() {
    this.number = [];
    this.score = {};
  }

  setNumber(userInput) {
    const stringArray = userInput.split('');
    this.number = stringArray.map((string) => Number(string));
  }
}

module.exports = User;
