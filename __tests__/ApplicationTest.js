const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

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
  test('게임을 시작하면 컴퓨터의 선택을 3자리 숫자로 초기화한다.', () => {
    const randoms = [1, 3, 5];
    mockRandoms(randoms);

    const app = new App();
    app.play();

    expect(app.enemy).toEqual(randoms.join(''));
  });

  test('컴퓨터의 선택은 서로 다른 세자리 숫자이다.', () => {
    const randoms = [1, 2, 2];
    mockRandoms(randoms);

    const app = new App();
    app.play();

    expect(app.enemy).not.toEqual(randoms.join(''));
  });

  test('같은 수가 같은 자리에 있으면 스트라이크를 센다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['153'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(app.strike).toEqual(1);
  });

  test('같은 수가 다른 자리에 있으면 볼을 센다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['153'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(app.ball).toEqual(2);
  });

  test('3스트라이크가 아니면 playGame()을 호출한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['135'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.playGame = jest.fn();

    app.play();

    expect(app.playGame).toHaveBeenCalled();
  });

  test('3스트라이크면 endGame()을 호출한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['135'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.endGame = jest.fn();

    app.play();

    expect(app.endGame).toHaveBeenCalled();
  });

  test('1을 입력하면 게임을 새로 시작한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '1'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play = jest.fn();

    app.startGame();
    app.playGame();

    expect(app.play).toHaveBeenCalled();
  });

  test('2를 입력하면 애플리케이션을 종료한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '2'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('게임 종료');
  });

  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
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

  test('예외 테스트', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(TypeError);
  });

  test('사용자 입력이 3자리 수가 아니면 TypeError로 예외 처리한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력에 중복이 있으면 TypeError로 예외 처리한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['122'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(TypeError);
  });

  test('사용자 입력에 숫자가 아닌 값이 있으면 TypeError로 예외 처리한다.', () => {
    const randoms = [1, 3, 5];
    const answers = ['12a'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(TypeError);
  });
});
