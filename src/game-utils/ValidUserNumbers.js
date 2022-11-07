class ValidUserNumbers {
  isValidUserInput(userInput) {
    const isNumberElement = (element) => (element >= '1' && element <= '9');
    const userNumbers = [];
    userInput
      .split('')
      .forEach(element => {
        !userNumbers.includes(element) ? userNumbers.push(element) : ""
      });

    return (
      userNumbers.length === 3 &&
      (userNumbers).every(isNumberElement)
    )
  }
}

module.exports = ValidUserNumbers;