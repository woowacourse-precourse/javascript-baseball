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

function getResult(answer, userInput) {
  let result = "";
  const userInputArr = userInput.split("");
  const strike = countStrike(answer, userInputArr);
  return result;
}

module.exports = getResult;
