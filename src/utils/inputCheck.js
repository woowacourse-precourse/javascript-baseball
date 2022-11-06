export const isNumber = (input) => {
  return Number.isInteger(input) ? true : false;
};
export const isOneToNine = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) > 0 && Number(input[i]) < 10) return true;
  }
  return false;
};
export const isThree = (input) => {
  return input.length === 3 ? true : false;
};
export const isAllDifferent = (input) => {
  const unique = new Set(input);
  return unique.size === input.length ? true : false;
};
