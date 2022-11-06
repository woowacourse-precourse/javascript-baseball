class User {
  constructor() {
    this.number = [];
  }

  setNumber(userInput) {
    const stringArray = userInput.split('');
    this.number = stringArray.map((string) => Number(string));
  }
}

module.exports = User;
