class User {
  constructor() {
    this.number = [];
  }

  setUserNumber(userInput) {
    this.number = userInput.split('');
  }
}

/// /////////////////////////

module.exports = User;
