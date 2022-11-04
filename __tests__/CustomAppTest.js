const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

describe('App 클래스 - get3RandomNumbers()', () => {
  test('MissionUtils.Random.pickUniqueNumbersInRange 함수 동작 테스트', () => {
    const app = new App();
    const isNumber = (item) => typeof item === 'number';

    expect(app.get3RandomNumbers().every((item) => isNumber(item))).toBeTruthy();
    expect([...new Set(app.get3RandomNumbers())]).toHaveLength(3);

    MissionUtils.Console.close();
  });
});

describe('App 클래스 - isStrike()', () => {
  test('주어진 입력값이 random값과 비교 스트라이크인지 확인하는 함수', () => {
    const random = [1, 2, 3];
    const input = [1, 4, 5];

    const app = new App();

    expect(app.isStrike(random[0], input[0])).toBeTruthy();
    expect(app.isStrike(random[1], input[1])).toBeFalsy();
    expect(app.isStrike(random[2], input[2])).toBeFalsy();
  });
});

describe('App 클래스 - isBall()', () => {
  test('주어진 입력값이 random값과 비교 볼인지 확인하는 예제', () => {
    const random = [2, 1, 3];
    const input = [1, 4, 5];

    const app = new App();

    expect(app.isBall(random, input, 0)).toBeTruthy();
    expect(app.isBall(random, input, 1)).toBeFalsy();
    expect(app.isBall(random, input, 2)).toBeFalsy();
  });

  test('스트라이크일때 볼이라고 하지 않는지 확인하는 예제', () => {
    const random = [1, 2, 3];
    const input = [1, 3, 2];

    const app = new App();

    expect(app.isBall(random, input, 0)).toBeFalsy();
    expect(app.isBall(random, input, 1)).toBeTruthy();
    expect(app.isBall(random, input, 2)).toBeTruthy();
  });
});

describe('App 클래스 - countStrike()', () => {
  test('2볼 1스트라이크 상황', () => {
    const random = [2, 1, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.countStrike(random, input)).toEqual(1);
  });

  test('노볼 노스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [4, 5, 6];

    const app = new App();

    expect(app.countStrike(random, input)).toEqual(0);
  });

  test('3스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.countStrike(random, input)).toEqual(3);
  });
});

describe('App 클래스 - countBall()', () => {
  test('2볼 1스트라이크 상황', () => {
    const random = [2, 1, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.countBall(random, input)).toEqual(2);
  });

  test('노볼 노스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [4, 5, 6];

    const app = new App();

    expect(app.countBall(random, input)).toEqual(0);
  });

  test('3스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.countBall(random, input)).toEqual(0);
  });
});

describe('App 클래스 - getResultToString()', () => {
  test('2볼 1스트라이크 상황', () => {
    const random = [2, 1, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.getResultToString(random, input)).toEqual('2볼 1스트라이크');
  });

  test('노볼 노스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [4, 5, 6];

    const app = new App();

    expect(app.getResultToString(random, input)).toEqual('낫싱');
  });

  test('3스트라이크 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.getResultToString(random, input)).toEqual('3스트라이크');
  });

  test('2볼 상황', () => {
    const random = [1, 2, 3];
    const input = [2, 1, 4];

    const app = new App();

    expect(app.getResultToString(random, input)).toEqual('2볼');
  });
});

describe('App 클래스 - isStrikeOut()', () => {
  test('3볼일 때', () => {
    const random = [2, 1, 3];
    const input = [3, 2, 1];

    const app = new App();

    expect(app.isStrikeOut(random, input)).toBeFalsy();
  });

  test('2스트라이크 노볼 상황', () => {
    const random = [1, 2, 3];
    const input = [1, 4, 3];

    const app = new App();

    expect(app.isStrikeOut(random, input)).toBeFalsy();
  });

  test('3스트라이크일 때', () => {
    const random = [1, 2, 3];
    const input = [1, 2, 3];

    const app = new App();

    expect(app.isStrikeOut(random, input)).toBeTruthy();
  });
});

describe('App 클래스 - print()', () => {
  test('원하는 메세지 출력', () => {
    const getLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, 'print');
      logSpy.mockClear();
      return logSpy;
    };

    const message = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();

    // 실행
    const app = new App();
    app.print(message);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});

describe('App 클래스 - end()', () => {
  test('종료 함수 테스트', () => {
    const getCloseLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, 'close');
      logSpy.mockClear();
      return logSpy;
    };

    const getLogSpy = () => {
      const logSpy = jest.spyOn(MissionUtils.Console, 'print');
      logSpy.mockClear();
      return logSpy;
    };

    const closeLogSpy = getCloseLogSpy();
    const logSpy = getLogSpy();

    const app = new App();
    app.end();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('종료'));
    expect(closeLogSpy).toBeCalled();
  });
});
