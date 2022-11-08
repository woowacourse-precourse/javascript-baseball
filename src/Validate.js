const validator = {
  isLengthOk: (str) => {
    if (str.length !== 3) return false;
    return true;
  },

  isNumber: (str) => {
    if (isNaN(str)) return false;
    return true;
  },

  isDifferent: (str) => {
    const numberSet = new Set(str.split(""));
    if (numberSet.size !== 3) return false;
    return true;
  },

  isRangeStr: (str) => {
    const numArr = str.split("").map(Number);
    for (let num of numArr) {
      if (num === 0) return false;
    }
    return true;
  },
};

module.exports = validator;
