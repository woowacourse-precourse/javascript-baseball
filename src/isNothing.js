const isNothing = (initNum, userNum) => {
  let answer = true;

  initNum.forEach((number, index) => {
    userNum.indexOf(number) !== -1 ? (answer = false) : null;
  });

  if (answer === true) return "낫싱";
  return answer;
};

module.exports = isNothing;
