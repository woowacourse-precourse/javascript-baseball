function validateAnswer(answer) {
  const LENGTH = 3;
  const isNumbers = /^[1-9]+$/.test(answer);
  const isThreeDigits = answer.length === LENGTH;
  const isUnique = new Set(answer).size === LENGTH;

  if (isNumbers && isThreeDigits && isUnique) return true;
  return false;
}

module.exports = validateAnswer;
