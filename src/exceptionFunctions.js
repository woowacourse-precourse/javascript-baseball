const isNotNumber = (number) => {
  return isNaN(Number(number));
};

const isContainsNumberZero = (number) => {
  return number.includes("0");
};

const isDuplicate = (number) => {
  const set = new Set();
  set.add(number[0]);
  set.add(number[1]);
  set.add(number[2]);

  if (set.size !== number.length) return true;
  return false;
};

const isExceptionDetection = (number) => {
  if (number.length !== 3) return true;
  if (isNotNumber(number)) return true;
  if (isContainsNumberZero(number)) return true;
  if (isDuplicate(number)) return true;
  return false;
};

module.exports = {
  isNotNumber,
  isContainsNumberZero,
  isDuplicate,
  isExceptionDetection,
};
