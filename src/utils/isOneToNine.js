const isOneToNine = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) < 1 || Number(input[i]) > 9) return false;
  }
  return true;
};

module.exports = isOneToNine;
