function getBall(computerAnswer, userAnswer) {
  let ball = 0;
  computerAnswer.forEach((num) => {
    if (userAnswer.includes(num)) {
      ball += 1;
    }
  });

  return ball;
}

function getStrike(computerAnswer, userAnswer) {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (computerAnswer[i] === userAnswer[i]) {
      strike += 1;
    }
  }

  return strike;
}

function createResult(computerAnswer, userAnswer) {
  const strike = getStrike(computerAnswer, userAnswer);
  const ball = getBall(computerAnswer, userAnswer) - strike;
  let result = "";

  if (ball > 0) {
    result += `${ball}볼`;
  }
  if (ball > 0 && strike && 0) {
    result += " ";
  }
  if (strike > 0) {
    result += `${strike}스트라이크`;
  }
  if (ball === 0 && strike === 0) {
    result = "낫싱";
  }

  return result;
}

module.exports = createResult;
