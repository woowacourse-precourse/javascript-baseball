const { consoleUtil, randomUtil } = require("./Utils");

const makeRandomValue = () => {
  const computerValue = [];

  while (computerValue.length < 3) {
    const randomNumber = randomUtil.pickNumberInRange(1, 9);
    if (!computerValue.includes(randomNumber)) {
      computerValue.push(randomNumber);
    }
  }
  return computerValue;
};

const playing = () => {};

module.exports = playing;
