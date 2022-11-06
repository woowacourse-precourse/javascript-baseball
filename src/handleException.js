function handleException(inputs) {
  if (exceptionCase(inputs) === 1) throw "숫자만 입력할 수 있습니다.";
  if (exceptionCase(inputs) === 2) throw "중복된 수는 입력할 수 없습니다.";
  if (exceptionCase(inputs) === 3) throw "세 자리 수만 입력할 수 있습니다.";
}

function exceptionCase(inputs) {
  const uniqueInputs = Array.from(new Set(inputs));
  if (isNaN(inputs.join(""))) return 1;
  if (inputs.length !== uniqueInputs.length) return 2;
  if (inputs.length !== 3) return 3;
}

module.exports = handleException;
