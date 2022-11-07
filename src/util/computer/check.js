function checkIncorrectNumber(numberStr) {
  if (numberStr === "1" || numberStr === "2") return false;

  const checkingStr = numberStr.trim();
  if (isNaN(+checkingStr)) return true;
  if (checkingStr.length !== 3) return true;
  if (checkingStr.includes("0")) return true;

  return false;
}

module.exports = { checkIncorrectNumber };
