const getBall = (inputNumber, answer, includeOfNum) => {
  let ballCnt = 0;
  [...inputNumber].forEach((num, idx) => {
    if (num !== answer[idx] && includeOfNum[num]) {
      ballCnt += 1;
    }
  });

  return ballCnt;
};

const getStrike = (inputNumber, answer) => {
  let strikeCnt = 0;
  [...inputNumber].forEach((num, idx) => {
    if (num === answer[idx]) {
      strikeCnt += 1;
    }
  });

  return strikeCnt;
};

const createResult = (inputNumber, answer) => {
  if (inputNumber === "") return "낫싱";
  const includeOfNum = Array.from({ length: 10 }).fill(false);
  let result = "";

  [...answer].forEach((num) => {
    includeOfNum[num] = true;
  });

  const ball = getBall(inputNumber, answer, includeOfNum);
  const strike = getStrike(inputNumber, answer);

  if (ball === 0 && strike === 0) return "낫싱";
  if (ball > 0) result += `${ball}볼`;
  if (ball > 0 && strike > 0) result += " ";
  if (strike > 0) result += `${strike}스트라이크`;

  return result;
};

module.exports = createResult;
