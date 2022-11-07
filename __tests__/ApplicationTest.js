const App = require('../src/App');
const { handleUserInputException } = require('../src/exception');
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

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe('사용자 입력값 예외처리', () => {
  test('숫자가 아닌 값이 존재하는 경우', () => {
    expect(() => handleUserInputException('1a2', 'getExpectedAnswer')).toThrow(
      '숫자만 입력할 수 있습니다.'
    );
    expect(() => handleUserInputException('aaa', 'getExpectedAnswer')).toThrow(
      '숫자만 입력할 수 있습니다.'
    );
  });

  test('3자리가 아닌 경우', () => {
    expect(() => handleUserInputException('12', 'getExpectedAnswer')).toThrow(
      '3자리 숫자를 입력해주세요'
    );
    expect(() => handleUserInputException('12345', 'getExpectedAnswer')).toThrow(
      '3자리 숫자를 입력해주세요'
    );
  });

  test('0이 존재하는 경우', () => {
    expect(() => handleUserInputException('120', 'getExpectedAnswer')).toThrow(
      '1에서 9 사이의 숫자를 입력해주세요'
    );
  });

  test('중복이 존재하는 경우', () => {
    expect(() => handleUserInputException('112', 'getExpectedAnswer')).toThrow(
      '각 자리에 중복되지 않은 숫자를 입력해주세요'
    );
  });

  test('1 또는 2 외의 값을 입력한 경우', () => {
    expect(() => handleUserInputException('3', 'getRestart')).toThrow('1 또는 2 중에 선택해주세요');
    expect(() => handleUserInputException('0', 'getRestart')).toThrow('1 또는 2 중에 선택해주세요');
  });
});
