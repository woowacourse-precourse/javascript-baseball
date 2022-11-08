const MissionUtils = require("@woowacourse/mission-utils");

const getBall = (computerAnswer, userAnswer) => {
  let ball = 0;
  computerAnswer.forEach((num) => {
    if (userAnswer.includes(num)) {
      ball += 1;
    }
  });

  return ball;
};

const getStrike = (computerAnswer, userAnswer) => {
  let strike = 0;
  computerAnswer.forEach((item, idx) => {
    if (computerAnswer[idx] === userAnswer[idx]) {
      strike += 1;
    }
  });

  return strike;
};

const createResult = (computerAnswer, userAnswer) => {
  const strike = getStrike(computerAnswer, userAnswer);
  const ball = getBall(computerAnswer, userAnswer) - strike;
  let result = "";

  if (ball === 0 && strike === 0) {
    result = "낫싱";
  }
  if (ball > 0) {
    result += `${ball}볼`;
  }
  if (ball > 0 && strike > 0) {
    result += " ";
  }
  if (strike > 0) {
    result += `${strike}스트라이크`;
  }
  MissionUtils.Console.print(result);

  return strike === 3;
};

module.exports = createResult;
