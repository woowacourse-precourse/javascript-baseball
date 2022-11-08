const { Console } = require('@woowacourse/mission-utils');
const Printer = require('../src/Printer');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('메세지 출력 테스트', () => {
  test('게임 시작 메세지 출력 테스트', () => {
    const startMessage = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();
    const printer = new Printer();
    printer.showStartMessage();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(startMessage));
  });
});
