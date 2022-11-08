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

describe('App 클래스 기능 테스트', () => {
  test('getRandomsStr 메서드로 컴퓨터가 3자리 숫자를 정한다.', () => {
    const randoms = [5, 3, 2, 1, 4, 7, 5, 1, 6];
    const answers = ['532', '147', '516'];

    mockRandoms(randoms);

    const app = new App();

    answers.forEach((answer) => {
      const result = app._getRandomsStr(0, 0, 3);
      expect(result).toEqual(answer);
    });
  });

  test('isDuplicated 메서드는 숫자의 중복 여부를 boolean 값으로 반환', () => {
    const numbers = ['123', '456', '111'];
    const answers = [false, false, true];

    const app = new App();
    answers.forEach((answer, i) => {
      const result = app.isDuplicated(numbers[i]);
      expect(result).toEqual(answer);
    });
  });

  test('isStrike 메서드는 숫자 1개의 위치를 맞추면 boolean 값 반환', () => {
    const target = '123';
    const testPairs = [
      ['1', 0],
      ['2', 1],
      ['3', 0],
    ];
    const answers = [true, true, false];

    const app = new App();

    answers.forEach((answer, i) => {
      const [num, numIdx] = testPairs[i];
      const result = app.isStrike(target, num, numIdx);

      expect(result).toEqual(answer);
    });
  });

  test('isBall 메서드는 위치가 다르지만 숫자 1개를 맞췄을 때 boolean 값 반환', () => {
    const target = '123';
    const testPairs = [
      ['1', 0],
      ['2', 1],
      ['3', 0],
    ];
    const answers = [false, false, true];

    const app = new App();

    answers.forEach((answer, i) => {
      const [num, numIdx] = testPairs[i];
      const result = app.isBall(target, num, numIdx);

      expect(result).toEqual(answer);
    });
  });

  test('3자리 숫자가 스트라이크라면, "게임 종료" 메시지를 출력한다.', () => {
    const randoms = [5, 3, 2];
    const answers = ['123', '456', '532'];
    const msg = '게임 종료';
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(msg));
  });
});
