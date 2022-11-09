class User {
  constructor(userAnswer = null) {
    this.userAnswer = userAnswer;
  }

  saveUserInput(answer) {
    this.userAnswer = answer;
  }
}

module.exports = User;
