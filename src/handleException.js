function handleException(inputs) {
  const uniqueInputs = Array.from(new Set(inputs));

  if (inputs.length !== uniqueInputs.length) return false;
  if (inputs.length !== 3) return false;
  if (isNaN(inputs.join(""))) return false;
  return true;
}

module.exports = handleException;
