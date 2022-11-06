const Mission = require("../utils/Mission");

class GetUserInput extends Mission {
  constructor() {
    super();
    this.valid = require("./UserInputValid");
    this.score = require("../play/GetScore");
  }

  init(computerNumbers, userNumbers) {
    console.log(computerNumbers, userNumbers);
    if (this.checkInputValueValid(userNumbers)) {
      return this.getScoreMessage(computerNumbers, userNumbers);
    }
  }

  checkInputValueValid(userInputValue) {
    return new this.valid(userInputValue).checkValid();
  }

  getScoreMessage(computerNumbers, userNumbers) {
    const scoreMessage = new this.score(computerNumbers, userNumbers).compare();
    return scoreMessage;
  }
}

module.exports = GetUserInput;
