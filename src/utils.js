const isAllNumber = (numberArr) =>
  numberArr.every((number) => !Number.isNaN(number));

const isCorrectedLength = (arr) => arr.length === 3;

module.exports = { isAllNumber, isCorrectedLength };
