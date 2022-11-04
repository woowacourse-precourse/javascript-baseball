// 3자리 숫자인지 판별
function isThreeDigitsNumber(inputNumbers) {
  return inputNumbers.length === 3;
}

// 입력값이 모두 정수 형태의 숫자인지 판별
function isIntegerNumber(inputNumbers) {
  return inputNumbers.every((inputNumber) =>
    Number.isInteger(parseInt(inputNumber, 10))
  );
}

// 중복되는 숫자가 없는지 판별
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
