const generateNumArr = ([min, max]) =>
  Array(max - min + 1)
    .fill()
    .map((number, index) => min + index);

const stringToNumArr = (str) => str.split('').map(Number);

module.exports = { generateNumArr, stringToNumArr };
