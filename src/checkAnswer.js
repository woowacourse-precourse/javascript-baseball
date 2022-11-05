const strikeCount = (numArr, answer) => {
  return numArr.filter((number, i) => number === answer[i]).length;
};
