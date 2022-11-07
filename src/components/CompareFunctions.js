const compareNumber = (answer, playerInput) => {
  const inputArray = playerInput.split('');
  const strikes = getStrikes(answer, inputArray);
};

const countStrikes = (number, index, answer) => {
  let strike = 0;
  if (number === answer[index]) {
    strike += 1;
  }
  return strike;
};

const getStrikes = (answer, inputArray) => {
  let strike = 0;
  inputArray.forEach((number, index) => {
    strike += countStrikes(number, index, answer);
  });
  return strike;
};

module.exports = compareNumber;
