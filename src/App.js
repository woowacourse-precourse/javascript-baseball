const { Console, Random } = require('@woowacourse/mission-utils');

const CONSOLE_MESSAGE = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  getQuery: '숫자를 입력해주세요 : ',
};

async function readLineAsync(message) {
  return new Promise((res) => {
    Console.readLine(message, (line) => {
      res(line);
    });
  });
}

class App {
  answer = '';

  resetAnswer() {
    let newAnswer = '';
    while (newAnswer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!newAnswer.includes(number)) {
        newAnswer += number;
      }
    }
    this.answer = newAnswer;
  }

  checkValidQuery() {}

  checkValidRestartQuery() {}

  getResultMessage(strikeCount, ballCount) {
    switch (true) {
      case strikeCount === 0 && ballCount === 0:
        return '낫싱';
      case strikeCount === 0:
        return `${ballCount}볼`;
      case ballCount === 0:
        return `${strikeCount}스트라이크`;
      default:
        return `${strikeCount}스트라이크 ${ballCount}볼`;
    }
  }

  getQueryResult(query) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let idx = 0; idx < 3; idx += 1) {
      if (this.answer.includes(query[idx])) {
        ballCount += 1;
      }
      if (query[idx] === this.answer[idx]) {
        strikeCount += 1;
      }
    }

    ballCount -= strikeCount;

    const resultMessage = this.getResultMessage(strikeCount, ballCount);

    return {
      isGameEnd: query === this.answer,
      resultMessage,
    };
  }

  checkRestart() {}

  async repeatQuery() {
    while (true) {
      const query = await readLineAsync(CONSOLE_MESSAGE.getQuery);
      this.checkValidQuery(query);

      const { isGameEnd, resultMessage } = await this.getQueryResult(query);
      Console.print(resultMessage);

      if (isGameEnd && !this.checkRestart()) {
        break;
      }
    }
  }

  play() {
    Console.print(CONSOLE_MESSAGE.gameStart);
    this.resetAnswer();

    try {
      this.repeatQuery();
    } catch {
      Console.close();
    }
  }
}

module.exports = App;
