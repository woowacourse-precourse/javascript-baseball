const { Console } = require("@woowacourse/mission-utils");

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

  /**
   * 결과값을 받아 게임이 끝났는지 확인한다.
   * @param {string} singleTryResultComment [결과 string]
   */
  checkIsGameFinished(singleTryResultComment) {
    // 정답이라면 정답이라 말하고 재시작 의사 input 을 받는다.
    if (singleTryResultComment === "3스트라이크") {
      this.view.printGameFinished();
      this.view.getRestartInput();
    }

    // 정답이 아니라면 유저에게 다른 수 제시를 요구한다.
    this.view.getUserGuessInput();
  }

  /**
   * 유저 재시작 의사 input 이 유효한 수인지 확인한다.
   * @param {string} restartUserInput [유저 input]
   */
  checkIsRestartUserInputValid(restartUserInput) {
    const isRestartUserInputValid =
      this.validation.getIsUserRestartInputValid(restartUserInput);

    // 유효하지 않다면 throw error
    if (!isRestartUserInputValid) {
      throw new Error(this.view.RESTART_INVALID_INPUT_COMMENT);
    }

    // 1번이라면 게임 재시작
    if (restartUserInput === "1") {
      new Controller(false).init();
    }

    // 2번이라면 게임 완전히 종료
    Console.print(this.view.CLOSING_COMMENT);
    Console.close();
  }
}

module.exports = Controller;
