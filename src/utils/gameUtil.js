const convertToNumberArray = (string) => {
  return string.split('').map(Number);
};

module.exports = { convertToNumberArray };
