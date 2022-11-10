const { INPUT_LENGTH } = require('../constants/gameSetting');

const isNotThreeDigit = (inputDigit) => inputDigit.length !== INPUT_LENGTH;
const isNotOneToNineDigit = (inputDigit) => isNaN(inputDigit) || inputDigit.toString().includes('0');
const isDuplicates = (inputDigit) => {
  const arrForCheck = inputDigit.toString().split('');
  const setForCheck = new Set(arrForCheck);
  return arrForCheck.length !== setForCheck.size;
};

const isAllPassed = (inputDigit) => isNotThreeDigit(inputDigit)
|| isNotOneToNineDigit(inputDigit)
|| isDuplicates(inputDigit);

module.exports = {
  isAllPassed,
};
