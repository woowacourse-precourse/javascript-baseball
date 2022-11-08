const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { MESSAGE } = require('../src/constants');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getCloseSpy = () => {
  const closeSpy = jest.spyOn(MissionUtils.Console, 'close');
  closeSpy.mockClear();
  return closeSpy;
};

describe('숫자 야구 게임', () => {
  test('사용자의 임의의 3개의 수 입력', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '2'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(app.balls).toEqual([1, 3, 5]);
  });

  test('예외 테스트 (3개 이상의 수)', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 (숫자가 아닌 값)', () => {
    const randoms = [1, 3, 5];
    const answers = ['abc'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 (중복인 값)', () => {
    const randoms = [1, 3, 5];
    const answers = ['113'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트 (1~9 이외의 수)', () => {
    const randoms = [1, 3, 5];
    const answers = ['013'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('정답과 입력값 비교 후 출력', () => {
    const randoms = [1, 3, 5];
    const answers = ['246', '153', '351', '135'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '2볼 1스트라이크', '3볼', '3스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

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

  test('게임 종료', () => {
    const logSpy = getLogSpy();
    const closeSpy = getCloseSpy();
    const messages = [MESSAGE.QUIT];

    App.quit();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
