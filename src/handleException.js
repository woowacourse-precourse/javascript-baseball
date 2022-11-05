function handleException(answer) {
  const answers = answer.split("");
  const uniqueAnswers = Array.from(new Set(answer));

  if (answers.length !== uniqueAnswers.length) return false;
  if (answers.length !== 3) return false;
  if (isNaN(answer)) return false;
  return true;
}

module.exports = handleException;
