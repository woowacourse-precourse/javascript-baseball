const isNumber = (input) => {
  const isNaNArray = input.map((digit) => isNaN(digit));
  if (isNaNArray.includes(true)) return false;
  return true;
};

const isThreeDigit = (input) => {
  if (input.length === 3) return true;
  return false;
};

const isInRange = (input) => {
  if (input.includes(0)) return false;
  return true;
};
