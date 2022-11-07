const MissionUtils = require("@woowacourse/mission-utils");

const hint = (arr) => {
  const strikeAndBall = [];
  const [strike, ball] = arr;
  addBallUnit(ball, strikeAndBall);
  addStrikeUnit(strike, strikeAndBall);
  const answer = result(strikeAndBall);
  MissionUtils.Console.print(answer);
  return answer;
};

const addBallUnit = (number, strikeAndBall) => {
  if (number !== 0) {
    strikeAndBall.push(`${number}볼`);
  }
};

const addStrikeUnit = (number, strikeAndBall) => {
  if (number !== 0) {
    strikeAndBall.push(`${number}스트라이크`);
  }
};

const result = (array) => {
    if(array.join(" ") !== "") {
        return array.join(" ");
    } else {
        return "낫싱";
    }
}

module.exports = hint;
