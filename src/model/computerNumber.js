// 컴퓨터가 설정한 수
class ComputerNumber {
  constructor() {
    this.number = null;
  }

  /**
   * 컴퓨터가 설정한 숫자를 return 한다.
   * @return {string[]} [컴퓨터가 설정한 숫자를 담은 배열]
   */
  getState() {
    return this.number;
  }

  /**
   * 컴퓨터가 설정한 숫자 상태를 변경한다.
   * @param {string[]} newState [변경할 새로운 값]
   */
  setState(newState) {
    this.number = newState;
  }
}

module.exports = ComputerNumber;
