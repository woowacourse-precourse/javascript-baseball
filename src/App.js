const { Console, Random } = require('@woowacourse/mission-utils');

const CONSOLE_MESSAGE = {
  start: '숫자 야구 게임을 시작합니다.',
  end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  getQuery: '숫자를 입력해주세요 : ',
};

const ERROR_MESSAGE = {
  baseballQuery: '길이 3의 숫자만 입력이 가능합니다.',
  restartQuery: '"1" 또는 "2"만 입력할 수 있습니다.',
};

function createValidateFunc({ regExp, errorMessage }) {
  return (query) => {
    if (regExp.test(query)) return;
    throw new Error(errorMessage);
  };
}

function getRandomAnswer() {
  let newAnswer = '';
  while (newAnswer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!newAnswer.includes(number)) {
      newAnswer += number;
    }
  }
  return newAnswer;
}

function convertCountToMessage({ strike, ball }) {
  switch (true) {
    case strike === 0 && ball === 0:
      return '낫싱';
    case strike === 0:
      return `${ball}볼`;
    case ball === 0:
      return `${strike}스트라이크`;
    default:
      return `${ball}볼 ${strike}스트라이크`;
  }
}

class App {
  answer = '';

  validateRestartQuery = createValidateFunc({
    regExp: /^[1|2]$/,
    errorMessage: ERROR_MESSAGE.restartQuery,
  });

  validateBaseballQuery = createValidateFunc({
    regExp: /^[1-9]{3}$/,
    errorMessage: ERROR_MESSAGE.baseballQuery,
  });

  getBaseballResult(query) {
    const {
      strike,
      ball,
    } = query.split('').reduce((countObject, currentValue, idx) => {
      const currentCountObject = Object.assign(countObject);

      if (currentValue === this.answer[idx]) {
        currentCountObject.strike += 1;
      } else if (this.answer.includes(currentValue)) {
        currentCountObject.ball += 1;
      }

      return currentCountObject;
    }, { ball: 0, strike: 0 });

    return convertCountToMessage({ strike, ball });
  }

  confirmBaseballEnd() {
    Console.print(CONSOLE_MESSAGE.end);
    Console.readLine(CONSOLE_MESSAGE.restart, (restartQuery) => {
      this.validateRestartQuery(restartQuery);

      if (restartQuery === '1') {
        this.startNewBaseball();
      }
      if (restartQuery === '2') {
        Console.close();
      }
    });
  }

  repeatQuery() {
    Console.readLine(CONSOLE_MESSAGE.getQuery, (query) => {
      this.validateBaseballQuery(query);

      const result = this.getBaseballResult(query);
      Console.print(result);

      if (query !== this.answer) {
        this.repeatQuery();
      } else {
        this.confirmBaseballEnd();
      }
    });
  }

  startNewBaseball() {
    this.answer = getRandomAnswer();
    this.repeatQuery();
  }

  play() {
    Console.print(CONSOLE_MESSAGE.start);
    this.startNewBaseball();
  }
}

module.exports = App;
