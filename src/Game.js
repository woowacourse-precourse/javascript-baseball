const { print, pickUniqueNumbersInRange } = require("./Utils");

const createComputerNumbers = () => {
  return pickUniqueNumbersInRange(1, 9, 3);
};

module.exports = () => {
  const computerNumbers = createComputerNumbers();
  print(computerNumbers);
};
