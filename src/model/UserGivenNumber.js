const Validation = require("../utils/Validation");
const View = require("../view/View");

// 유저가 제시한 수
class UserGivenNumber {
  constructor() {
    this.validation = new Validation();
    this.view = new View();
    this.number = null;
  }

  /**
   * 유저가 제시한 숫자를 return 한다.
   * @return {string[]} [컴퓨터가 설정한 숫자를 담은 배열]
   */
  getState() {
    return this.number;
  }

  // 유저가 제시한 수에 문제가 없는지 확인한다.
  checkIsUserInputValid() {
    const isUserInputValid = this.validation.getIsUserGuessInputValid(
      this.getState()
    );

    // 문제가 있다면 throw Error
    if (!isUserInputValid) {
      this.view.throwUserGuessInputError();
    }
  }

  /**
   * 유저가가 설정한 숫자 상태를 변경한다.
   * @param {string[]} newState [변경할 새로운 값]
   */
  setState(newState) {
    this.number = newState;

    this.checkIsUserInputValid();
  }
}

module.exports = UserGivenNumber;
