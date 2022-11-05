function validateInput(input) {
  if (validateInputLength(input)) return false;
  if (validateInputDuplication(input)) return false;
  if (isNaN(input)) return false;

  return true;
}

function validateInputLength(input) {
  return input.length !== 3;
}
function validateInputDuplication(input) {
  return new Set(input.split("")).size !== 3;
}
function validateInputIsNaN(input) {
  let NaN = false;
  input.split("").forEach((eachChar) => {
    if (typeof eachChar !== "number") NaN = true;
  });

  return NaN;
}

module.exports = validateInput;
