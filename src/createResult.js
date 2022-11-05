function createResult(inputNumber, answer) {
  const includeOfNum = {};
  inputNumber = String(inputNumber).split("");
  answer = String(answer).split("");
  let ball = 0;
  let strike = 0;
  let result = "";

  answer.forEach((num) => {
    includeOfNum[num] = true;
  });

  ball = getBall(ball, inputNumber, answer, includeOfNum);
  strike = getStrike(strike, inputNumber, answer);

  if (ball > 0) result += `${ball}볼`;
  if (ball > 0 && strike > 0) result += " ";
  if (strike > 0) result += `${strike}스트라이크`;
  if (ball === 0 && strike === 0) result = "낫싱";

  console.log(result);
}

module.exports = createResult;
