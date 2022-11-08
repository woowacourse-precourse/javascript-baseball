/* eslint-disable max-lines-per-function */
const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
function checkAnswer(number) {
  if (Number.isNaN(parseFloat(number))) {
    return false;
  }
  if (number.length !== 3) {
    return false;
  }
  const inputDigit = number.split('').map(Number);
  if (new Set(inputDigit).size !== 3 || number.includes('0')) {
    return false;
  }
  return true;
}
function answerTest() {
  const answer = App.createAnswer();
  const validAnswer = checkAnswer(answer);
  expect(validAnswer).toEqual(true);
}

describe('게임 시작 전 테스트', () => {
  for (let i = 1; i <= 50; i += 1) {
    test(`정답 생성`, answerTest);
  }
});

describe('게임 참여 단계 테스트', () => {
  test('게임 시작 문구 출력 테스트', () => {
    const logpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
// eslint-disable-next-line max-lines-per-function
describe('사용자 입력값 평가 테스트', () => {
  test('입력값 예외 처리 테스트(문자)', () => {
    const randoms = [1, 2, 3];
    const answers = ['cba'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다.숫자를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(길이)', () => {
    const randoms = [1, 2, 3];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 3자리 수를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(중복)', () => {
    const randoms = [1, 2, 3];
    const answers = ['222'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(0포함)', () => {
    const randoms = [1, 2, 3];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ');
  });
});

describe('사용자 입력값 평가 테스트2', () => {
  test('사용자 입력값과 정답 비교 테스트', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ['789', '451', '178', '139', '123', '1', '456', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('게임 종료 이후 단계 테스트', () => {
  test('게임 종료 후 재시작 선택 문구 출력', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['135', '1', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
