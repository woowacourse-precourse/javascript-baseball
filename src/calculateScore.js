function calculateScore(answers, inputs) {
  let strike = 0;
  let ball = 0;
  answers.forEach((_, i) => {
    if (answers[i] === inputs[i]) strike += 1;
    else if (answers.includes(inputs[i])) ball += 1;
  });
  return { strike, ball };
}

module.exports = calculateScore;
