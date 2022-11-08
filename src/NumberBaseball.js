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
    this.gamePlay(answer);
  }

  gamePlay(answer) {
    this.getUserInput((input) => {
      const scores = this.checkUserInput(input, answer);
      this.printInputResult(scores.ball, scores.strike);
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

  checkUserInput(input, answer) {
    const ballCount = input.filter(
      (x, index) => answer.includes(x) && answer[index] !== x
    ).length;
    const strikeCount = input.filter((x, index) => answer[index] === x).length;
    return { ball: ballCount, strike: strikeCount };
  }

  printInputResult(ballCount, strikeCount) {
    let message = "";
    if (ballCount === 0 && strikeCount === 0) {
      message = MESSAGES.NOTHING;
    } else if (strikeCount === 3) {
      message = MESSAGES.CORRECT;
    } else {
      let ballMessage = ballCount !== 0 ? `${ballCount}볼` : "";
      const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : "";
      if (ballCount !== 0 && strikeCount !== 0) {
        ballMessage = `${ballMessage} `;
      }
      message = `${ballMessage}${strikeMessage}`;
    }
    Console.print(message);
  }
}
module.exports = NumberBaseball;
