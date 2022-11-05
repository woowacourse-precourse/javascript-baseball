function handleException(input) {
  const inputs = input.split("");
  const uniqueInputs = Array.from(new Set(inputs));

  if (inputs.length !== uniqueInputs.length) return false;
  if (inputs.length !== 3) return false;
  if (isNaN(inputs)) return false;
  return true;
}

module.exports = handleException;
