const isValidContinueOption = (option) => {
  if (option === '1') return true;
  if (option === '2') return false;

  throw new Error('1,2 이외의값');
};

module.exports.isValidContinueOption = isValidContinueOption;
