const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const isAvailableValue = require('../src/utils/isAvailableValue');
const getGameResultMessage = require('../src/utils/getGameResultMessage');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
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

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 결과 문구 테스트', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = [246, '579', '514', '513', '146', '137', '153', '135', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '2볼',
      '3볼',
      '1스트라이크',
      '2스트라이크',
      '2볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 시작 및 종료 문구 출력 테스트', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ['123', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('3자리 수가 아닐 때 예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('서로 다른 3자리 수가 아닐 때 예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['119'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('1부터 9까지가 아닐 때 예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['890'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('숫자가 아닐 때 예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['abc'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe('util 테스트', () => {
  test('isAvailableValue 테스트', () => {
    const values = ['123', '133', '190', '3456', 394];
    const result = [true, false, false, false, true];
    values.forEach((value, i) => expect(isAvailableValue(value)).toEqual(result[i]));
  });

  test('getGameResultMessage 테스트', () => {
    const count = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [2, 0],
      [3, 0],
      [1, 1],
      [1, 2],
      [2, 1],
    ];
    const result = [
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '3스트라이크',
      '1볼',
      '2볼',
      '3볼',
      '1볼 1스트라이크',
      '1볼 2스트라이크',
      '2볼 1스트라이크',
    ];

    count.forEach((element, i) =>
      expect(getGameResultMessage(element[0], element[1])).toEqual(result[i])
    );
  });
});
