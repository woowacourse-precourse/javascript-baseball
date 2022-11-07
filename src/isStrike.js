const isStrike = (initNum, userNum) => {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    initNum[i] === userNum[i] ? strike++ : null;
  }

  return strike;
};

module.exports = isStrike;
