const App = require('../src/App');
const { Console, Random } = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  
  return logSpy;
};

describe('기능 목록 검사', () => {
  test('게임 처음 시작 초기화 및 안내 출력 기능', () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('플레이어 입력값 받는 기능', () => {
    const randoms = [1, 2, 3];
    const playerInput = ['142','123'];
    const logSpy = getLogSpy();

    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '1볼 1스트라이크',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(playerInput);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test('정답과 입력값 비교 검사 및 힌트 출력', () => {
    const randoms = [1, 2, 3];
    const playerInput = ['456', '415', '134', '153', '123']
    const logSpy = getLogSpy();

    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '낫싱',
      '1볼',
      '1볼 1스트라이크',
      '2스트라이크',
      '3스트라이크',
    ];

    mockRandoms(randoms);
    mockQuestions(playerInput);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });

  test('재시작 및 종료 검사', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const playerInput = ['123', '1', '456', '2']
    const logSpy = getLogSpy();

    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '게임 종료',
    ]

    mockRandoms(randoms);
    mockQuestions(playerInput);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });
});