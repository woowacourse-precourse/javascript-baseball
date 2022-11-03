const validation = {
  playerInput: (input) => {
    if (input.match(/[^1-9]/g)) return false;

    if (input.length !== 3) return false;

    let numbers = [...new Set([...(input + "")])].map((num) => Number(num));
    if (numbers.length !== 3) return false;

    if (numbers.includes(0)) return false;

    return true;
  },

  option: (input) => {
    let isValid;

    if (input !== "1" && input !== "2") isValid = false;
    else isValid = true;

    return isValid;
  },
};

module.exports = validation;
