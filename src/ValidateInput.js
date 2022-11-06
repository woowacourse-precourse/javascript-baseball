const { NUMBER_LENGTH } = require("./constants/ConstantValues");

const validateInputLength = (input) => {
  return input.length !== NUMBER_LENGTH;
};

const validateInputDuplication = (input) => {
  return new Set(input.split("")).size !== NUMBER_LENGTH;
};

const validateInputIsNaN = (input) => {
  let NaN = false;
  input.split("").forEach((eachChar) => {
    if (isNaN(eachChar)) NaN = true;
  });

  return NaN;
};

const validateInput = (input) => {
  if (validateInputLength(input)) return false;
  if (validateInputDuplication(input)) return false;
  if (validateInputIsNaN(input)) return false;

  return true;
};

module.exports = validateInput;
