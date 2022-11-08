const isAllDifferent = (input) => {
  const unique = new Set(input);
  return unique.size === input.length ? true : false;
};
module.exports = isAllDifferent;
