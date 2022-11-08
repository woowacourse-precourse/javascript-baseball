const App = require('../src/App');
const { mockQuestions, mockRandoms, getLogSpy } = require('../src/TestUtils');

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작 1', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const userInputs = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 재시작 2', () => {
    const randoms = [
      1, 3, 5,
      7, 4, 8,
      1, 3, 5,
      5, 8, 9,
    ];
    const userInputs = [
      '123', '456', '789', '126', '134', '135', '1',
      '123', '456', '789', '784', '874', '479', '748', '1',
      '246', '135', '1',
      '597', '589', '2',
    ];
    const logSpy = getLogSpy();
    const messages = [
      '1볼 1스트라이크',
      '1볼',
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '3스트라이크',
      '낫싱',
      '1볼',
      '1볼 1스트라이크',
      '2볼 1스트라이크',
      '3볼',
      '2볼',
      '3스트라이크',
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('단판전', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['123', '456', '789', '126', '134', '135', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '1볼 1스트라이크',
      '1볼',
      '낫싱',
      '1스트라이크',
      '2스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외 테스트 1', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['1234'];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 2', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['123', '456', '789', '126', '134', '135', '99999'];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 3', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['123', '456', '너무 어려워요', '126', '134', '135', '2'];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 4', () => {
    const randoms = [1, 3, 5];
    const userInputs = ['123', '456', '777', '126', '134', '135', '2'];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 5', () => {
    const randoms = [
      1, 3, 5,
      7, 4, 8,
    ];
    const userInputs = [
      '123', '456', '789', '126', '134', '135', '1',
      '123', '456', '789', '987', '874', '479', '748', '종료',
    ];

    mockRandoms(randoms);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
