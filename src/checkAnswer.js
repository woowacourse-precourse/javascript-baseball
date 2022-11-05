const strikeCount = (numArr, answer) => {
  return numArr.filter((number, i) => number === answer[i]).length;
};

const ballCount = (numArr, answer) => {
  return numArr.filter(
    (number, i) => answer.includes(number) && number !== answer[i]
  ).length;
};

const isNothing = (strikeCount, ballCount) => strikeCount + ballCount === 0;
