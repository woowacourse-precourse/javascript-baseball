const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/Constants");

class NumberBaseball {
  gameStart() {
    Console.print(MESSAGES.START_GAME);
    this.gamePlay();
  }

  gamePlay() {
    const answer = this.makeAnswer();
    console.log(answer);
  }

  makeAnswer() {
    const answer = [];
    while (answer.length !== 3) {
      const nextNum = Random.pickNumberInRange(1, 9);
      if (!answer.includes(nextNum)) {
        answer.push(nextNum);
      }
    }
    return answer;
  }
}
module.exports = NumberBaseball;
