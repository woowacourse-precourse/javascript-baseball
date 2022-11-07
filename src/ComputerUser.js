const { Random } = require('@woowacourse/mission-utils');
class Computer {
  /**
   * 컴퓨터라는 개발자가 만든 사용자가 랜덤으로 세 자리 배열을 생성하여 반환한다.
   * @returns {[number, number, number]} 랜덤으로 생성된 세 자리 배열
   */
  createRandomAnswer() {
    const answers = [];
    while (answers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answers.includes(number)) {
        answers.push(number);
      }
    }
    console.log(answers);
    return answers;
  }
}

module.exports = Computer;
