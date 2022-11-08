const View = require("../view/View");
const ComputerNumber = require("../model/ComputerNumber");
const UserGivenNumber = require("../model/UserGivenNumber");
const Validation = require("../utils/Validation");

class Controller {
  constructor(isFirstGame) {
    this.view = new View(this);
    this.computerNumber = new ComputerNumber();
    this.userGivenNumber = new UserGivenNumber();
    this.validation = new Validation();
    this.isFirstGame = !!isFirstGame;
  }

  /**
   * 결과값을 받아 게임이 끝났는지 확인한다.
   * @param {number[]} strikeBallCountArray [결과 배열]
   */
  checkIsGameFinished(strikeBallCountArray) {
    // 정답이라면 정답이라 말하고 재시작 의사 input 을 받는다.
    if (strikeBallCountArray[0] === 3) {
      this.view.printGameFinished();
      this.view.getRestartInput();
    }

    // 정답이 아니라면 유저에게 다른 수 제시를 요구한다.
    this.view.getUserGuessInput();
  }

  // 유저가 제시한 수에 따라 결과를 도출한다.
  getSingleTryResult() {
    const userGivenNumber = this.userGivenNumber.getState();
    const computerGivenNumber = this.computerNumber.getState();
    const strikeBallCount = [0, 0];

    for (let i = 0; i < userGivenNumber.length; i++) {
      const singleDigitResult = this.isStrikeBallNothing(
        userGivenNumber,
        computerGivenNumber,
        i
      );
      if (singleDigitResult === "strike") strikeBallCount[0]++;
      if (singleDigitResult === "ball") strikeBallCount[1]++;
    }

    this.view.printSingleTryResult(strikeBallCount);
    this.checkIsGameFinished(strikeBallCount);
  }

  /**
   * 유저가 제시한 수를 저장한다(update).
   * @param {string} userGivenNumber [유저가 제시한 수(문자열)]
   */
  updateUserGivenNumber(userGivenNumber) {
    this.userGivenNumber.setState(userGivenNumber.toString().split(""));

    // 문제가 없다면 다음 단계로
    this.getSingleTryResult();
  }

  /**
   * 유저가 제시한 수의 각 숫자에 따른 스트라이크, 볼, 낫싱 여부를 return 한다.
   * @param {string[]} userGivenNumber [유저가 제시한 수]
   * @param {string[]} computerGivenNumber [컴퓨터가 생성한 수]
   * @param {number} index [순회문의 index]
   * @return {string} [결과 값]
   */
  isStrikeBallNothing(userGivenNumber, computerGivenNumber, index) {
    // 숫자와 자리까지 같다면 (스트라이크)
    if (userGivenNumber[index] === computerGivenNumber[index]) {
      return "strike";
    }
    // 숫자만 있다면 (볼)
    if (
      userGivenNumber[index] !== computerGivenNumber[index] &&
      computerGivenNumber.includes(userGivenNumber[index])
    ) {
      return "ball";
    }

    return "noting";
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
      this.view.trowUserRestartInputError();
    }

    // 1번이라면 게임 재시작
    if (restartUserInput === "1") {
      new Controller(false).init();
    }

    // 2번이라면 게임 완전히 종료
    this.view.finishGame();
  }

  // 게임 초기 실행
  init() {
    this.view.printWelcomeMessage(this.isFirstGame);
    this.computerNumber.setRandomNumber();
    this.view.getUserGuessInput();
  }
}

module.exports = Controller;
