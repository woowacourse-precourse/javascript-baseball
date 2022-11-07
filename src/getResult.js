function checkStrike(answer, cur, idx) {
  return cur === answer[idx];
}

function countStrike(answer, userInputArr) {
  let strike = 0;
  userInputArr.reduce((acc, cur, idx) => {
    if (checkStrike(answer, cur, idx)) {
      strike += 1;
    }
  }, 0);
  return strike;
}

function checkBall(answer, cur, idx) {
  return !checkStrike(answer, cur, idx) && answer.includes(cur);
}

function countBall(answer, userInputArr) {
  let ball = 0;
  userInputArr.reduce((acc, cur, idx) => {
    if (checkBall(answer, cur, idx)) {
      ball += 1;
    }
  }, 0);
  return ball;
}

function getResult(answer, userInput) {
  let result = "";
  const userInputArr = userInput.split("");
  const strike = countStrike(answer, userInputArr);
  const ball = countBall(answer, userInputArr);
  return result;
}

module.exports = getResult;
