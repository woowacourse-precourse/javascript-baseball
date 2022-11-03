class BaseballGameModel {
  constructor() {
    this.computerValue = '';
    this.userValue = '';
  }

  setUserValue(data) {
    this.userValue = data;
  }

  setComputerValue(data) {
    this.computerValue = data;
  }
}

module.exports = BaseballGameModel;
