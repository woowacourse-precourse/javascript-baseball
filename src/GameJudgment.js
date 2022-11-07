function countStrikeAndBall(user, computer) {
  let ballCount = 0;
  let strikeCount = 0;

  for (let i = 0; i < 3; i++) {
    if (user[i] === computer[i]) {
      strikeCount = strikeCount + 1;
    }
    if (user[i] !== computer[i] && computer.includes(user[i])) {
      ballCount = ballCount + 1;
    }
  }
  return [ballCount, strikeCount];
}

class GameJudgment {
  judgement(ballCount, strikeCount) {
    const [userBallCount, userStrikeCount] = countStrikeAndBall(
      ballCount,
      strikeCount
    );
    return [userBallCount, userStrikeCount];
  }
}
module.exports = GameJudgment;
