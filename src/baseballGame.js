const countStrikeNumbers = (computerNumbers, userInput) => {
  return computerNumbers.filter((number, index) => number == userInput[index])
  .length;
};

const countBallNumbers = (computerNumbers, userInput) => {
  return computerNumbers.filter(
    (number, index) => userInput.includes(number) && number != userInput[index]
  ).length;
};


module.exports = { countStrikeNumbers, countBallNumbers };
