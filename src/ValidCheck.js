const getIsLengthInvalid = (inputValue) => {
  return inputValue.length !== 3;
};

const getIsRepeatExist = (inputValue) => {
  for (let i = 1; i < inputValue.length; i++) {
    if (inputValue[i - 1] === inputValue[i]) return true;
  }
  return false;
};

const getIsInvalidWordExist = (inputValue) => {
  let inputValueWithoutNumber = inputValue.replace(/[1-9]/g, "");
  return inputValueWithoutNumber.length !== 0;
};

module.exports = {
  getIsInvalidWordExist,
  getIsRepeatExist,
  getIsLengthInvalid,
};
