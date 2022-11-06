const { Random } = require('@woowacourse/mission-utils');
const Player = require('./index.js');
class Computer extends Player {
  constructor() {
    super();
    this.random = Random.pickNumberInRange;
    this.number = null;
  }
  /** 
   * 이 인스턴스의 number를 반환한다.
   * @return {[number,number,number]|null} 
   * */
  getNumber() {
    return this.number;
  }

  /**
   * 이 인스턴스의 number를 유니크한 3개의 숫자로 설정한다.
   */
  setNumber() {
    const result = [];
    while (result.length < 3) {
      const number = this.random(1, 9);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    this.number = result;
  }
}

module.exports = Computer;
