const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('피드백 테스트', () => {
  test('case1', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printFeedback([1, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });
  test('case2', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printFeedback([1, 2]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 2스트라이크'));
  });
  test('case3', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printFeedback([0, 2]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2스트라이크'));
  });
  test('case4', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printFeedback([0, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });
});
