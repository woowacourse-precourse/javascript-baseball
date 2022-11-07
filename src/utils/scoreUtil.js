const isAllStrike = (user, computer) => {
  return JSON.stringify(user) === JSON.stringify(computer);
};

const countingStrike = (user, computer) => {
  let strike = 0;
  user.forEach((number, idx) => {
    if (computer[idx] === number) {
      strike += 1;
    }
  });
  return strike;
};

const countingBall = (user, computer) => {
  let ball = 0;
  user.forEach((number, idx) => {
    if (computer[idx] !== number && computer.includes(number)) {
      ball += 1;
    }
  });
  return ball;
};

const calculateScore = (user, computer) => {
  const result = {
    strike: 0,
    ball: 0,
  };
  if (isAllStrike(user, computer)) {
    result.strike = 3;
    return result;
  }
  result.strike += countingStrike(user, computer);
  result.ball += countingBall(user, computer);

  return result;
};

exports.calculateScore = calculateScore;
