const MissionUtils = require("@woowacourse/mission-utils");
const { RESULT } = require("./constants.js");

const compareArguments = (computer, user) => {
  const strike = countStrikeNumbers(computer, user);
  const ball = countBallNumbers(computer, user);
  printGameResult(strike, ball);
};

const countStrikeNumbers = (computer, user) => {
  return computer.filter(
    (number, index) => number == user[index]
    ).length;
};

const countBallNumbers = (computer, user) => {
  return computer.filter(
    (number, index) => user.includes(number) && number != user[index]
    ).length;
};

const printGameResult = (strike, ball) => {
  if (strike === 3) return print(RESULT.정답);
  if (!strike && !ball) return print(RESULT.낫싱);

  return print(
    `${ball ? ball + RESULT.볼 : RESULT.공백}${
      strike ? strike + RESULT.스트라이크 : RESULT.공백
    }`
  );
};

const print = (string) => MissionUtils.Console.print(string);

module.exports = {compareArguments, countStrikeNumbers, countBallNumbers, printGameResult};
