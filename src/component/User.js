class User {
  checkInputLength(userInput) {
    return userInput.length === 3;
  }
  checkInputExist(userInput) {
    const isExist = new Set([...userInput]).size !== 3;
    return isExist === false;
  }
}
