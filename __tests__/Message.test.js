const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('../src/Message');

const { close } = MissionUtils.Console;

afterEach(() => {
  close();
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('print()', () => {
  test('주어진 문자열을 그대로 콘솔에 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print('Original Data');

    expect(logSpy).toHaveBeenCalledWith('Original Data');
  });

  test('빈 문자열을 전달하면 에러가 발생한다.', () => {
    expect(() => {
      const message = new Message();
      message.print('');
    }).toThrow();
  });
});

describe('start()', () => {
  test('숫자 야구 게임을 시작합니다. 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.start());

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
