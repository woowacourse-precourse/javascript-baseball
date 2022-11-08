class Game {
  validateInput(input) {
    const isValidLength = input.length === 3;
    const isValidType = !Number.isNaN(Number(input));
    const isValidRange = ![...input].includes("0");
    const isUniqueDigit = new Set([...input]).size === 3;

    const isValidInput =
      isValidLength && isValidType && isValidRange && isUniqueDigit;

    return isValidInput;
  }
}

module.exports = Game;
