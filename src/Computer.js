const { Console, Random } = require("@woowacourse/mission-utils");

class Computer {
    pickedNum() {
        let correctAnswer = new Set();
      
        while (correctAnswer.size < 3) {
            correctAnswer.add(Random.pickNumberInRange(1, 9));
        }

        return Array.from(correctAnswer);
    }
}

module.exports = Computer;