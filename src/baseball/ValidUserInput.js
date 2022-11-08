class ValidUserNumbers {
  static isValidUserInput(userInput) {
    const isNumberElement = (element) => element >= "1" && element <= "9";
    const userNumbers = [];
    userInput.split("").forEach((element) => {
      !userNumbers.includes(element) ? userNumbers.push(element) : "";
    });

    return userNumbers.length === 3 && userNumbers.every(isNumberElement);
  }

  static isvalidRestart(restartNumber) {
    restartNumber = Number(restartNumber);

    if (restartNumber !== 1 && restartNumber !== 2)
      throw new Error("1 또는 2만 입력해주세요.");
  }
}

module.exports = ValidUserNumbers;
