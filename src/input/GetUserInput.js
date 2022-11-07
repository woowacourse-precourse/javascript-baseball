const Mission = require("../utils/Mission");
const UserInputValidation = require("./UserInputValidation");
const GetScore = require("../play/GetScore");

class GetUserInput extends Mission {
  constructor() {
    super();
  }

  countingScore(computerNumbers, userNumbers) {
    if (this.checkInputValueValid(userNumbers)) {
      return this.getScoreMessage(computerNumbers, userNumbers);
    }
  }

  checkInputValueValid(userInputValue) {
    return new UserInputValidation(userInputValue).checkValid();
  }

  getScoreMessage(computerNumbers, userNumbers) {
    const scoreMessage = new GetScore(computerNumbers, userNumbers).compare();
    return scoreMessage;
  }
}

module.exports = GetUserInput;
