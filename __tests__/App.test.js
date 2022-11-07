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
});
