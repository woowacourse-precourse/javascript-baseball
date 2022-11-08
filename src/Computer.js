const { Random } = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this.correctNumber = getRandomNumber();
  }

  setNewCorrectNumber() {
    this.correctNumber = getRandomNumber();
  }
}

const getRandomNumber = () => {
  let randomNumberArray = [];

  while (randomNumberArray.length < 3) {
    const newRandomNumber = Random.pickNumberInRange(1, 9);

    if (!randomNumberArray.includes(newRandomNumber))
      randomNumberArray.push(newRandomNumber);
  }

  return randomNumberArray.join("");
};

module.exports = Computer;
