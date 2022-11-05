const strikeCount = (numArr, answer) => {
  return numArr.filter((number, i) => number === answer[i]).length;
};

const ballCount = (numArr, answer) => {
  return numArr.filter(
    (number, i) => answer.includes(number) && number !== answer[i]
  ).length;
};

console.log(ballCount([1, 2, 3], [2, 3, 1]));
console.log(ballCount([1, 2, 3], [1, 2, 4]));
