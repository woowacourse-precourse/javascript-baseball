const { INPUT_LENGTH } = require('../constants/gameSetting');

const isThreeStrike = (strike) => strike === INPUT_LENGTH;
const isBall = ({ randomDigit, digit, idx }) => {
  if (randomDigit.includes(digit)) return randomDigit[idx] !== digit;
};
const isStrike = ({ randomDigit, digit, idx }) => {
  if (randomDigit.includes(digit)) return randomDigit[idx] === digit;
};

module.exports = {
  isThreeStrike,
  isBall,
  isStrike,
};
