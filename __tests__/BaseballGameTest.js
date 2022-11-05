/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { getRandomNumbers, getStrike, getBall } = require('../src/utils/core');

const getSpy = (object, methodName) => {
  const spy = jest.spyOn(object, methodName);
  spy.mockClear();
  return spy;
};

const mockUserValue = (numbers) => {
  MissionUtils.Console.readLine = jest.fn();
  numbers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('숫자 야구 게임', () => {
  test('게임 시작 문구 출력', () => {
    const logSpy = getSpy(MissionUtils.Console, 'print');
    const message = '숫자 야구 게임을 시작합니다.';

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('1에서 9까지의 서로 다른 3자리 수 생성', () => {
    const pickNumberSpy = getSpy(MissionUtils.Random, 'pickNumberInRange');
    const result = getRandomNumbers();
    const removeDuplicatedNumber = new Set(result);

    expect(pickNumberSpy).toHaveBeenCalledWith(1, 9);
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.not.stringContaining('0'));
    expect(result.length).toEqual(removeDuplicatedNumber.size);
  });

  test('사용자의 입력값이 1에서 9까지의 서로 다른 3자리 수가 아닐 때 예외 발생', () => {
    const userValue = ['000', '120', '102', '0', '12', '3', '121', 'a', 'AAA'];

    mockUserValue(userValue);

    for (let index = 0; index < userValue.length; index += 1) {
      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    }
  });

  test('스트라이크, 볼 개수 계산', () => {
    const computerValue = ['132', '283', '632', '192', '527'];
    const userValue = ['123', '139', '632', '132', '752'];
    const strike = ['1스트라이크', '', '3스트라이크', '2스트라이크', ''];
    const ball = ['2볼', '1볼', '', '', '3볼'];

    for (let index = 0; index < computerValue.length; index += 1) {
      const resultStrike = getStrike(computerValue[index], userValue[index]);
      const resultBall = getBall(computerValue[index], userValue[index]);

      expect(resultStrike).toEqual(strike[index]);
      expect(resultBall).toEqual(ball[index]);
    }
  });

  test('게임 재시작, 종료 기능', () => {
    const randoms = [1, 9, 2, 4, 6, 1];
    const userValue = ['129', '192', '1', '123', '461', '2'];
    const logSpy = getSpy(MissionUtils.Console, 'print');
    const result = [
      '2볼 1스트라이크',
      '3스트라이크',
      '1볼',
      '3스트라이크',
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    mockRandoms(randoms);
    mockUserValue(userValue);

    const app = new App();
    app.play();

    result.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 사용자의 입력값이 1 또는 2 이외의 값일 때 예외 발생', () => {
    const randoms = [7, 1, 5];
    const userValue = ['715', '3'];

    mockRandoms(randoms);
    mockUserValue(userValue);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
