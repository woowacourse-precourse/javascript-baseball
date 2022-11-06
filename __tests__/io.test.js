const Io = require('../src/Io');
const { Console } = require('@woowacourse/mission-utils');
const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('I/O  테스트', () => {
  test('출력확인: 주어진 메시지를 콘솔에 출력한다.', () => {
    // given
    const message = 'test';
    const logSpy = getLogSpy();

    Io.output(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });
  test('입력확인', () => {
    const input = '123';
    Io.input = jest.fn();
    Io.input.mockImplementation((message, callback) => {
      callback(input);
    });

    Io.input('test', (result) => {
      expect(result).toBe(input);
    });
  });
});
