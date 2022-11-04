function isThreeDigitsNumber(inputNumbers) {
  return inputNumbers.length === 3;
}

function isIntegerNumber(inputNumbers) {
  return inputNumbers.every((inputNumber) =>
    Number.isInteger(parseInt(inputNumber, 10))
  );
}

function isExistDuplicatedNumber(inputNumbers) {
  const inputNumbersSet = new Set(inputNumbers);
  return inputNumbers.length === inputNumbersSet.size;
}

function validationNumbers(inputNumbers) {
  return (
    isThreeDigitsNumber(inputNumbers) &&
    isIntegerNumber(inputNumbers) &&
    isExistDuplicatedNumber(inputNumbers)
  );
}

exports.validationNumbers = validationNumbers;
