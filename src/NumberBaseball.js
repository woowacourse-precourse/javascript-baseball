const { Console, Random } = require("@woowacourse/mission-utils");
const { VALUES, MESSAGES } = require("./lib/Constants");

class NumberBaseball {
  gameStart() {
    Console.print(MESSAGES.START_GAME);
    this.gameSet();
  }

  gameSet() {
    const answer = this.makeAnswer();
    this.gamePlay(answer);
  }

  gamePlay(answer) {
    this.getUserInput((input) => {
      const scores = this.checkUserInput(input, answer);
      this.printInputResult(scores.ball, scores.strike);
      if (scores.strike === 3) {
        this.getRestartOrEnd();
      } else {
        this.gamePlay(answer);
      }
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
      this.setExceptionForUserTry(input);
      const inputArray = [...input].map((x) => Number(x));
      callback(inputArray);
    });
  }

  setExceptionForUserTry(input) {
    if (typeof input !== "string") {
      throw new Error("문자열을 입력하세요");
    }
    if (Number.isNaN(Number(input))) {
      throw new Error("숫자인 문자열을 입력하세요");
    }
    if (input.length !== VALUES.NUMBER_LENGTH) {
      throw new Error("3자리 숫자를 입력하세요");
    }
    const set = new Set([...input]);
    if (set.size !== input.length) {
      throw new Error("서로 다른 세 자리 수를 입력하세요");
    }
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

  getRestartOrEnd() {
    Console.readLine(MESSAGES.RESTART, (input) => {
      this.setExceptionForRestartInput(input);
      if (input === "1") {
        this.gameSet();
      } else if (input === "2") {
        Console.close();
      }
    });
  }

  setExceptionForRestartInput(input) {
    if (input !== "1" && input !== "2") {
      throw new Error("1 또는 2를 입력하세요.");
    }
  }
}

module.exports = NumberBaseball;
