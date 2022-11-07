const isNothing = (initNum, userNum) => {
  let answer = false;

  initNum.forEach((number, index) => {
    userNum.indexOf(number) === -1 ? (answer = true) : null;
  });

  if (answer === true) return "낫싱";
  return answer;
};

module.exports = isNothing;
