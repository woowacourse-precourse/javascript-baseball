const getBall = (ball, inputNumber, answer, includeOfNum) => {
  inputNumber.forEach((num, idx) => {
    if (num !== answer[idx]) {
      if (includeOfNum[num]) {
        ball += 1;
      }
    }
  });

  return ball;
};

const getStrike = (strike, inputNumber, answer) => {
  inputNumber.forEach((num, idx) => {
    if (num === answer[idx]) {
      strike += 1;
    }
  });

  return strike;
};

const createResult = (inputNumber, answer) => {
  if (inputNumber === "") return "낫싱";
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

  return result;
};

module.exports = createResult;
