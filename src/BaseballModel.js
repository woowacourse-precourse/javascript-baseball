class BaseballModel {
  constructor(randomNumber) {
    this.randomNumber = randomNumber;
  }

  getRandom() {
    console.log("모델넘버 :", this.randomNumber);
    return this.randomNumber;
  }
}

module.exports = BaseballModel;
