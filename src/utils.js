const checkLength = (num) => {
  return num.length === 3;
};

const checkZeroExist = (num) => {
  return num.includes(0);
};

const checkDuplicate = (num) => {
  const numberSet = new Set([...number]);
  return numberSet.size === num.length;
};

module.exports = {
  checkLength,
  checkZeroExist,
  checkDuplicate,
};
