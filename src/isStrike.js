const isStrike = (initNum, userNum) => {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    initNum[i] === userNum[i] ? strike++ : null;
  }

  if (strike === 0) {
    return null;
  } else {
    return `${strike}스트라이크`;
  }
};

module.exports = isStrike;
