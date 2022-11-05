function checkVaildData(input) {
  const vaildNumber = [...input].map((num) => {
    if (isNaN(num)) throw new Error();
    return +num;
  });
  const isUniqueNumber = new Set(input.split("")).size === 3;

  if (!vaildNumber || !isUniqueNumber || vaildNumber.includes(0)) {
    throw new Error();
  }

  return vaildNumber;
}

module.exports = checkVaildData;
