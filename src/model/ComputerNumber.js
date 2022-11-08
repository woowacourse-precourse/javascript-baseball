const { Random } = require("@woowacourse/mission-utils");

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

  // 컴퓨터가 3개의 범위안 숫자를 임의로 골라 상태값에 저장한다.
  setRandomNumber() {
    const randomNumberArray = [];

    while (randomNumberArray.length < 3) {
      const temporaryNumber = Random.pickNumberInRange(1, 9);

      if (!randomNumberArray.includes(temporaryNumber))
        randomNumberArray.push(temporaryNumber);
    }
    this.setState(
      randomNumberArray.map((singleNumber) => singleNumber.toString())
    );
  }
}

module.exports = ComputerNumber;
