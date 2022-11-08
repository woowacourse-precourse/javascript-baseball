const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const getRandomNumbers = require('../src/utils/generate-random-number');
const { restartEndGameAnswerValidator, guessAnswerValidate } = require('../src/utils/validation');

const mockAnswer = (numbers) => {
  MissionUtils.Console.readLine = jest.fn();
  numbers.reduce((mock, number) => {
    return mock.mockImplementationOnce((question, callback) => {
      callback(number);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((mock, number) => {
    return mock.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능테스트', () => {
  test('중복없는 3자리 숫자 생성', () => {
    const exceptNumbers = new Set(getRandomNumbers());
    expect(exceptNumbers.size).toEqual(3);
  });

  test('숫자 비교 기능 테스트', () => {
    const randoms = [4, 6, 7];
    mockRandoms(randoms);
    const app = new App();
    app.play();
    expect(app.outputResult('456')).toEqual('1볼 1스트라이크');
    expect(app.outputResult('356')).toEqual('1볼');
    expect(app.outputResult('459')).toEqual('1스트라이크');
    expect(app.outputResult('123')).toEqual('낫싱');
    expect(app.outputResult('467')).toEqual(
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
    );
  });
  test('정답입력 후 게임종료 시 게임종료 출력', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['135', '2'];
    const logSpy = getLogSpy();
    const messages = ['3스트라이크', '게임 종료'];
    mockRandoms(randoms);
    mockAnswer(answers);

    const app = new App();
    app.play();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });
  test('게임시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('숫자 야구 게임을 시작합니다'));
  });
});

describe('예외 테스트', () => {
  test('재시작/종료 입력 예외 처리 테스트', () => {
    const numbers = ['12', '3', 'q', '-', ' ', '57'];
    numbers.forEach((number) => {
      expect(() => restartEndGameAnswerValidator(number)).toThrow();
    });
  });
  test('정답 입력 예외 처리 테스트', () => {
    const numbers = ['12', 'q23', '000', 1, '1 2', '103', '1-2'];
    numbers.forEach((number) => {
      expect(() => guessAnswerValidate(number)).toThrow();
    });
  });
});
