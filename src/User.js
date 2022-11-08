class User {
  getUserArray(userNumber) {
    return [...userNumber].map((val) => parseInt(val));
  }
}

module.exports = User;
