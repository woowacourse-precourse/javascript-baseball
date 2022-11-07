const View = require("../view/view");
const ComputerNumber = require("../model/computerNumber");
const UserGivenNumber = require("../model/userGivenNumber");
const Validation = require("../utils/validation");

class Controller {
  constructor(isFirstGame) {
    this.view = new View(this);
    this.computerNumber = new ComputerNumber();
    this.userGivenNumber = new UserGivenNumber();
    this.validation = new Validation();
    this.isFirstGame = !!isFirstGame;
  }

  /**
   * 유저가 제시한 수를 저장한다(update).
   * @param {string[]} userGivenNumber [유저가 제시한 수]
   */
  updateUserGivenNumber(userGivenNumber) {
    this.userGivenNumber.setState(userGivenNumber);
  }
}

module.exports = Controller;
