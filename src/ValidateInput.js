const validateInputLength = (input) => {
  return input.length !== 3;
};

const validateInputDuplication = (input) => {
  return new Set(input.split("")).size !== 3;
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
