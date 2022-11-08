const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./lib/Constants");

class NumberBaseball {
  gameStart() {
    Console.print(MESSAGES.START_GAME);
    this.gameSet();
  }

  gameSet() {
    const answer = this.makeAnswer();
    console.log(answer);
    this.gamePlay();
  }

  gamePlay() {
    this.getUserInput((input) => {
      console.log(input);
    });
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

  getUserInput(callback) {
    Console.readLine(MESSAGES.INPUT_NUMBER, (input) => {
      const inputArray = [...input].map((x) => Number(x));
      callback(inputArray);
    });
  }
}
module.exports = NumberBaseball;
