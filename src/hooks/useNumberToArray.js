const useNumberToArray = (target) => {
  const arrayTarget = target.split("").map((item) => Number(item));
  return arrayTarget;
};

module.exports = { useNumberToArray };
