const isBall = (num, idx, nums) => {
  const targetIndex = nums.indexOf(num);
  return targetIndex !== -1 && targetIndex !== idx;
};

const isStrike = (num1, num2) => {
  return num1 === num2;
};

const makeString = ({ strike, ball }) => {
  let answer = "";
  if (strike === 0 && ball === 0) return "낫싱";
  if (ball > 0) answer += `${ball}볼 `;
  if (strike > 0) answer += `${strike}스트라이크`;
  return answer;
};

const makeBallCountString = (computer, nums) => {
  const ballCount = {
    strike: 0,
    ball: 0,
  };
  computer.forEach((num, idx) => {
    if (isStrike(num, nums[idx])) ballCount.strike += 1;
    if (isBall(num, idx, nums)) ballCount.ball += 1;
  });
  return makeString(ballCount);
};

module.exports = makeBallCountString;
