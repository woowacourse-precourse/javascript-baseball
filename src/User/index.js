const Validate = require('../utils/Validate');

// 게임을 진행하는 User Class
class User {
  #InputNums;

  constructor() {
    this.resetUser();
  }

  // User가 입력한 값을 출력하는 함수
  getInputNums() {
    return this.#InputNums;
  }

  // User가 입력한 값을  저장
  setInputNums(value) {
    let inputs = value;
    Validate.isInputVaildate(inputs);
    this.#InputNums = inputs.split('').map((num) => Number(num));
  }

  // Input값을 초기화 하기 위한 함하
  resetUser() {
    this.#InputNums = [];
  }
}

module.exports = User;
