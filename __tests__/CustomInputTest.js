const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getCloseLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'close');
  logSpy.mockClear();
  return logSpy;
};

describe('App 클래스 - print()', () => {
  test('원하는 메세지 출력', () => {
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
    const logSpy = getLogSpy();
    const closeLogSpy = getCloseLogSpy();

    const app = new App();
    app.end();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
    expect(closeLogSpy).toBeCalled();
  });
});
