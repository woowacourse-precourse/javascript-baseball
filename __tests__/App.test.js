const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const { close } = MissionUtils.Console;

afterEach(() => {
  close();
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('isStart()', () => {
  test('boolean 타입을 반환한다.', () => {
    const app = new App();
    expect(typeof app.isStart()).toBe('boolean');
  });
});

describe('isFinish()', () => {
  test('boolean 타입을 반환한다.', () => {
    const app = new App();
    expect(typeof app.isFinish()).toBe('boolean');
  });
});

describe('init()', () => {
  test('숫자 야구 게임을 시작합니다. 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();

    app.init();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('길이가 3인 배열을 생성한다.', () => {
    const app = new App();
    const threeRandomArray = app.init();

    expect(threeRandomArray).toHaveLength(3);
  });

  test('this.#isStart 속성의 값이 true이다.', () => {
    const app = new App();

    app.init();

    expect(app.isStart()).toBeTruthy();
  });
});

describe('isStrike()', () => {
  test('3을 전달하면 true를 반환한다.', () => {
    const app = new App();

    expect(app.isStrike(3)).toBeTruthy();
  });

  test('3을 전달하면 3개의 숫자를 모두 맞히셨습니다! 게임 종료 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();

    app.isStrike(3);

    expect(logSpy).toHaveBeenCalledWith('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  });

  test('3을 전달하면 this.#isFinish 속성의 값이 true이다.', () => {
    const app = new App();

    app.isStrike(3);

    expect(app.isFinish()).toBeTruthy();
  });

  test('3을 제외한 나머지를 전달하면 this.#isFinish 속성의 값이 false이다.', () => {
    const app = new App();

    app.isStrike(2);

    expect(app.isFinish()).toBeFalsy();
  });

  test('3을 제외한 나머지를 전달하면 false를 반환한다.', () => {
    const app = new App();

    expect(app.isStrike(1)).toBeFalsy();
    expect(app.isStrike(2)).toBeFalsy();
    expect(app.isStrike(4)).toBeFalsy();
  });
});

describe('userInteraction()', () => {
  test('길이가 2인 배열을 반환한다.', () => {
    const app = new App();
    const userInputArray = [1, 2, 3];

    expect(app.userInteraction(userInputArray)).toHaveLength(2);
  });

  test('입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();
    const userInputArray = [1, 2, 3];
    const computerInputArray = [3, 2, 1];

    app.userInteraction(userInputArray, computerInputArray);

    expect(logSpy).toHaveBeenCalledWith('2볼 1스트라이크');
  });

  test('하나도 없는 경우 낫싱 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();
    const userInputArray = [1, 2, 3];
    const computerInputArray = [4, 5, 6];

    app.userInteraction(userInputArray, computerInputArray);

    expect(logSpy).toHaveBeenCalledWith('낫싱');
  });

  test('3개의 숫자를 모두 맞힐 경우 3스트라이크 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();
    const userInputArray = [4, 5, 6];
    const computerInputArray = [4, 5, 6];

    app.userInteraction(userInputArray, computerInputArray);

    expect(logSpy).toHaveBeenCalledWith('3스트라이크');
  });
});

describe('userConfirm()', () => {
  test('1을 전달하면 숫자 야구 게임을 시작합니다. 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();

    app.userConfirm(1);

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('1을 전달하면 isStart 상태가 true 이다.', () => {
    const app = new App();

    app.userConfirm(1);

    expect(app.isStart()).toBeTruthy();
  });

  test('1을 전달하면 isFinish 상태가 false 이다.', () => {
    const app = new App();

    app.userConfirm(1);

    expect(app.isFinish()).toBeFalsy();
  });

  test('2을 전달하면 게임 종료 문구를 출력한다.', () => {
    const app = new App();
    const logSpy = getLogSpy();

    app.userConfirm(2);

    expect(logSpy).toHaveBeenCalledWith('게임 종료');
  });

  test('1과 2를 제외한 나머지를 전달하면 예외가 발생한다.', () => {
    expect(() => {
      const app = new App();
      app.userConfirm(3);
    }).toThrow('잘못된 입력을 하였습니다.');
  });
});
