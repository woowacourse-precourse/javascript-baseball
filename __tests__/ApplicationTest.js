const App = require('../src/App');
const Baseball = require('../src/components/Baseball');
const MissionUtils = require('@woowacourse/mission-utils');
const { ERROR } = require('../src/data/constants');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
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

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('볼, 스트라이크 개수 구하기(check method)', () => {
    const baseball = new Baseball();
    const random = [1, 2, 3];
    const answer = ['245', '125', '865', '182', '123'];
    const resuslt = [
      { ball: 1, strike: 0 },
      { ball: 0, strike: 2 },
      { ball: 0, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 0, strike: 3 },
    ];

    answer.forEach((number, index) => {
      expect(baseball.countBallAndStrike(number, random)).toEqual(
        resuslt[index],
      );
    });
  });

  test('결과 출력 확인(result method)', () => {
    const baseball = new Baseball();
    const input = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 0 },
      { ball: 0, strike: 2 },
      { ball: 1, strike: 1 },
      { ball: 0, strike: 3 },
    ];
    const result = [
      '낫싱',
      '1볼',
      '2스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
    ];
    input.forEach((inputNum, index) => {
      expect(baseball.countResultPrint(inputNum)).toEqual(result[index]);
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

  test('입력 길이 예외 테스트', () => {
    expect(() => {
      const randoms = [1, 3, 5];
      const answers = ['1234'];

      mockRandoms(randoms);
      mockQuestions(answers);

      const app = new App();
      app.play();
    }).toThrow(ERROR.LENGTH);
  });

  test('입력 중복 예외 테스트', () => {
    expect(() => {
      const randoms = [1, 3, 5];
      const answers = ['122'];

      mockRandoms(randoms);
      mockQuestions(answers);

      const app = new App();
      app.play();
    }).toThrow(ERROR.NOTUNIQUE);
  });

  test('0 입력 예외 테스트', () => {
    expect(() => {
      const randoms = [1, 3, 5];
      const answers = ['012'];

      mockRandoms(randoms);
      mockQuestions(answers);

      const app = new App();
      app.play();
    }).toThrow(ERROR.NUMBER_RANGE);
  });

  test('다시 시작 / 종료 입력 예외 테스트', () => {
    expect(() => {
      const randoms = [1, 3, 5];
      const answers = ['135', '3'];

      mockRandoms(randoms);
      mockQuestions(answers);

      const app = new App();
      app.play();
    }).toThrow(ERROR.RESTART_RANGE);
  });
});
