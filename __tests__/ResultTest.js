const { mockRandoms, mockQuestions, getLogSpy } = require('./ApplicationTest');
const App = require('../src/App');

describe('상황별 야구 게임 결과 테스트', () => {
  test('낫싱', () => {
    const randoms = [1, 3, 5];
    const answers = ['246'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });

  test('3스트라이크', () => {
    const randoms = [1, 3, 5];
    const answers = ['135'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3스트라이크'));
  });

  test('1볼', () => {
    const randoms = [1, 3, 5];
    const answers = ['528'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });

  test('2볼', () => {
    const randoms = [1, 3, 5];
    const answers = ['381'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2볼'));
  });

  test('3볼', () => {
    const randoms = [1, 3, 5];
    const answers = ['513'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3볼'));
  });

  test('1스트라이크', () => {
    const randoms = [1, 3, 5];
    const answers = ['168'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1스트라이크'));
  });

  test('2스트라이크', () => {
    const randoms = [1, 3, 5];
    const answers = ['136'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2스트라이크'));
  });
});

describe('게임 종료 및 재시작 테스트', () => {
  test('게임 종료', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '2'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    );
  });

  test('게임 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['135', '1', '589'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    );
  });

  test('게임 종료 예외 사항', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
