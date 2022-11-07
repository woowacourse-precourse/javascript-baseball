const { Random } = require("@woowacourse/mission-utils");

class Solution {
  pickNumbers() {
    const solutionNumbers = [];

    while (solutionNumbers.length < 3) {
      const tempNumber = Random.pickNumberInRange(1, 9);

      if (!solutionNumbers.includes(tempNumber)) {
        solutionNumbers.push(tempNumber);
      }
    }
    return solutionNumbers.join("");
  }
}

module.exports = Solution;
