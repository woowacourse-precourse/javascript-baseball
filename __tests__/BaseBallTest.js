const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const { INPUT_FAIL_ERROR_MESSAGE } = require('../src/errorMessage');

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
describe('게임 시작', () => {
  test('게임 시작 문구 출력 ', () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.')
    );
  });

  test('컴퓨터가 랜덤한 3개의 숫자 생성', () => {
    const app = new App();
    const minBound = 1;
    const maxBound = 9;
    const randomNumbers = app.computer.randomNumbers;

    randomNumbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(minBound);
      expect(number).toBeLessThanOrEqual(maxBound);
    });

    const randomNumberSet = new Set(randomNumbers);
    expect(randomNumbers).toHaveLength(randomNumberSet.size);
  });
});

describe('숫자 야구 게임 중', () => {
  test('사용자의 입력 받기, 사용자가 잘못된 값을 입력 받았는지 체크, 잘못된 값을 입력했다면 예외 발생', () => {
    const inputs = ['12', '0.5', '12a'];
    mockQuestions(inputs);

    inputs.forEach(() => {
      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });
  });

  test('사용자가 입력한 숫자와, 컴퓨터의 랜덤 숫자를 비교해 볼/스트라이크 결과 계산 후 힌트 출력, 모두 맞추지 못한 경우 사용자의 입력 다시 받기', () => {
    const logSpy = getLogSpy();

    const randoms = [1, 2, 3];
    const inputs = ['345', '567', '129', '312', '319', '189', '182', '123'];
    const messages = [
      '1볼',
      '낫싱',
      '2스트라이크',
      '3볼',
      '2볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
    ];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('사용자가 선택한 3개의 숫자를 모두 맞추었다면 게임 종료', () => {
    const logSpy = getLogSpy();

    const randoms = [1, 2, 3];
    const inputs = ['123'];
    const messages = ['3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('게임 종료', () => {
  test('모두 맞춘후, 게임 재시작', () => {
    const logSpy = getLogSpy();

    const randoms = [1, 2, 3, 5, 6, 7];
    const inputs = ['123', '1', '547'];
    const messages = ['3스트라이크', '게임 종료', '2스트라이크'];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('모두 맞춘 후, 게임 종료', () => {
    const logSpy = getLogSpy();

    const randoms = [1, 2, 3, 5, 6, 7];
    const inputs = ['123', '2'];
    const messages = ['3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('모두 맞춘 후, 게임 재시작/종료 예외처리 ', () => {
    const randoms = [1, 2, 3, 5, 6, 7];
    const inputs = ['123', '3'];

    mockRandoms(randoms);
    mockQuestions(inputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(INPUT_FAIL_ERROR_MESSAGE));
  });
});

describe('숫자 야구 결과값 함수 테스트', () => {
  test('사용자 입력값에 따른 strike, ball 예측', () => {
    const rightAnswers = [1, 2, 3];
    const answer = [
      [1, 2, 3],
      [3, 4, 5],
      [5, 6, 7],
      [1, 2, 9],
      [3, 1, 2],
      [3, 1, 9],
      [1, 8, 9],
      [1, 8, 2],
    ];
    const result = [
      { strike: 3, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 0, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 2 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 1 },
    ];

    const app = new App();
    result.forEach((output, idx) => {
      expect(app.getResult(answer[idx], rightAnswers)).toEqual(output);
    });
  });

  test('잘못된 사용자의 입력값에 따른 strike, ball 예측', () => {
    const rightAnswers = [1, 2, 3];
    const answer = [1, 2];

    expect(() => {
      const app = new App();
      app.getResult(answer, rightAnswers);
    }).toThrow(new Error(INPUT_FAIL_ERROR_MESSAGE));
  });

  test('숫자 야구 결과 힌트 출력', () => {
    const result = [
      { strike: 3, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 0, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 0, ball: 3 },
      { strike: 0, ball: 2 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 1 },
    ];
    const messages = [
      '3스트라이크',
      '1볼',
      '낫싱',
      '2스트라이크',
      '3볼',
      '2볼',
      '1스트라이크',
      '1볼 1스트라이크',
    ];

    const app = new App();
    messages.forEach((output, idx) => {
      const { strike, ball } = result[idx];
      expect(app.getHintMessage(strike, ball)).toBe(output);
    });
  });
});
