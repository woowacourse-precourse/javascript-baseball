const { Console, Random } = require('@woowacourse/mission-utils');

const CONSOLE_MESSAGE = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameEnd: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  gameRestart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  getQuery: '숫자를 입력해주세요 : ',
};

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

  checkValidQuery(query) {
    const threeNumberRegExp = /^[1-9]{3}$/;
    if (!threeNumberRegExp.test(query)) {
      throw new Error('길이 3의 숫자만 입력이 가능합니다.');
    }
  }

  checkValidRestartQuery(query) {
    const restartNumberRegExp = /^[1|2]$/;
    if (!restartNumberRegExp.test(query)) {
      throw new Error('"1" 또는 "2"만 입력할 수 있습니다.');
    }
  }

  getResultMessage(strikeCount, ballCount) {
    switch (true) {
      case strikeCount === 0 && ballCount === 0:
        return '낫싱';
      case strikeCount === 0:
        return `${ballCount}볼`;
      case ballCount === 0:
        return `${strikeCount}스트라이크`;
      default:
        return `${ballCount}볼 ${strikeCount}스트라이크`;
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

  handleGameEnd() {
    Console.print(CONSOLE_MESSAGE.gameEnd);
    Console.readLine(CONSOLE_MESSAGE.gameRestart, (restartQuery) => {
      this.checkValidRestartQuery(restartQuery);

      if (restartQuery === '1') {
        this.resetAnswer();
        this.repeatQuery();
      } else {
        Console.close();
      }
    });
  }

  repeatQuery() {
    Console.readLine(CONSOLE_MESSAGE.getQuery, (query) => {
      this.checkValidQuery(query);

      const { isGameEnd, resultMessage } = this.getQueryResult(query);
      Console.print(resultMessage);

      if (isGameEnd) {
        this.handleGameEnd();
      } else {
        this.repeatQuery();
      }
    });
  }

  play() {
    Console.print(CONSOLE_MESSAGE.gameStart);

    this.resetAnswer();
    this.repeatQuery();
  }
}

module.exports = App;
