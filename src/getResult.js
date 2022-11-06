const checkStrike = require("./checkStrike");
const checkBall = require("./checkBall");

function getResult(solution, answer) {
  const numberOfStrike = checkStrike(solution, answer);
  const numberOfBall = checkBall(solution, answer);

  if (numberOfStrike == 0 && numberOfBall != 0) return numberOfBall + "볼";
  if (numberOfStrike != 0 && numberOfBall == 0) {
    if (numberOfStrike === 3)
      return (
        numberOfStrike + "스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
    return numberOfStrike + "스트라이크";
  }
  if (numberOfStrike != 0 && numberOfBall != 0)
    return numberOfBall + "볼 " + numberOfStrike + "스트라이크";
  if (numberOfStrike == 0 && numberOfBall == 0) return "낫싱";
}

module.exports = getResult;
