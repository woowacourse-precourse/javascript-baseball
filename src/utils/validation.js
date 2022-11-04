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

const isDifferent = (input) => {
  const set = new Set();
  input.map((digit) => set.add(digit));
  if (set.size === 3) return true;
  return false;
};
