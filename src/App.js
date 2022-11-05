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

  async repeatQuery() {
    while (true) {
      const query = await readLineAsync(CONSOLE_MESSAGE.getQuery);
      this.checkValidQuery(query);

      Console.print(query);
    }
  }

  getQueryResult() {}

  checkRestart() {}

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
