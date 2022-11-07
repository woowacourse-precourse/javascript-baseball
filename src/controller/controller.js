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

  // 유저가 제시한 수에 따라 결과를 도출한다.
  getSingleTryResult() {
    const userGivenNumber = this.userGivenNumber.getState();
    const computerGivenNumber = this.computerNumber.getState();

    const strikeBallCount = [0, 0];

    for (let i = 0; i < userGivenNumber.length; i++) {
      if (userGivenNumber[i] === computerGivenNumber[i]) {
        strikeBallCount[0]++;
      } else if (computerGivenNumber.includes(userGivenNumber[i])) {
        strikeBallCount[1]++;
      }
    }

    this.view.printSingleTryResult(strikeBallCount);
  }

  // 유저가 제시한 수에 문제가 없는지 확인한다.
  checkIsUserInputValid() {
    const isUserInputValid = this.validation.getIsUserGuessInputValid(
      this.userGivenNumber.getState()
    );

    // 문제가 있다면 throw Error
    if (!isUserInputValid) {
      throw new Error(this.view.WRONG_COMMENT);
    }

    // 문제가 없다면 다음 단계로
    this.getSingleTryResult();
  }
}

module.exports = Controller;
