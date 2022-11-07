const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(answers);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('3가지 랜덤 숫자', () => {
    const app = new App();
    const threeRandomNumber = app.getRandomNumber();
    expect(threeRandomNumber.join('')).toMatch(/[1-9]{3}/g);
  });

  test('3가지 숫자 입력', () => {
    const answers = '123';
    mockQuestions(answers);
    const app = new App();
    app.getUserAnswer(answers);
    expect(answers).not.toBeNull();
  });

  test('0 포함 입력 예외 테스트', () => {
    const answers = '012';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('알파벳 포함 입력 예외 테스트', () => {
    const answers = 'a12';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('공백 포함 입력 예외 테스트', () => {
    const answers = '1 23';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('특수문자 포함 입력 예외 테스트', () => {
    const answers = '!23';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('4가지 숫자 입력 예외 테스트', () => {
    const answers = '1234';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('1스트라이크 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [1, 4, 5];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('1스트라이크');
  });

  test('2스트라이크 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [1, 2, 5];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('2스트라이크');
  });

  test('1볼 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [4, 1, 5];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('1볼');
  });

  test('2볼 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [2, 1, 5];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('2볼');
  });

  test('3볼 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [2, 3, 1];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('3볼');
  });

  test('1볼 1스트라이크 출력', () => {
    const randoms = [1, 2, 3];
    const answers = [1, 4, 2];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('1볼 1스트라이크');
  });

  test('낫싱', () => {
    const randoms = [1, 2, 3];
    const answers = [4, 5, 6];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('낫싱');
  });

  test('3스트라이크', () => {
    const randoms = [1, 2, 3];
    const answers = [1, 2, 3];
    const logSpy = getLogSpy();

    const app = new App();
    app.gameSystem(randoms, answers);
    expect(logSpy).toHaveBeenCalledWith('3스트라이크');
    expect(logSpy).toHaveBeenCalledWith(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    );
  });

  test('게임 새로 시작', () => {
    const answers = '1';
    const logSpy = getLogSpy();

    const app = new App();
    app.endGameSystem(answers);
    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('게임 종료', () => {
    const answers = '2';
    const logSpy = getLogSpy();

    const app = new App();
    app.endGameSystem(answers);
    expect(logSpy).not.toBeCalled();
  });

  test('게임 종료 예외 테스트 1', () => {
    const answers = '0';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.postEndMessage(answers);
    }).toThrow();
  });

  test('게임 종료 예외 테스트 2', () => {
    const answers = 'a';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.postEndMessage(answers);
    }).toThrow();
  });

  test('게임 종료 예외 테스트 3', () => {
    const answers = ' ';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.postEndMessage(answers);
    }).toThrow();
  });
});
