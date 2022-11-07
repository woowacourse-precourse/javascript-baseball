const View = require("../view/view");
const ComputerNumber = require("../model/computerNumber");
const UserGivenNumber = require("../model/userGivenNumber");

class Controller {
  constructor(isFirstGame) {
    this.view = new View(this);
    this.computerNumber = new ComputerNumber();
    this.userGivenNumber = new UserGivenNumber();
    this.isFirstGame = !!isFirstGame;
  }
}

module.exports = Controller;
