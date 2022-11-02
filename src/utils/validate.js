const isValid = (userNumber) => {
  if (typeof userNumber === "number") {
    return true;
  } else {
    return false;
  }
};

module.exports = { isValid };
