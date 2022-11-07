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

describe('end()', () => {
  test('3개의 숫자를 모두 맞히셨습니다! 게임 종료. 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.end());

    expect(logSpy).toHaveBeenCalledWith('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  });
});

describe('confirm()', () => {
  test('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.confirm());

    expect(logSpy).toHaveBeenCalledWith('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
  });
});

describe('input()', () => {
  test('숫자를 입력해 주세요 : 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.input());

    expect(logSpy).toHaveBeenCalledWith('숫자를 입력해 주세요 : ');
  });
});

describe('count()', () => {
  test('3볼 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.count(3));

    expect(logSpy).toHaveBeenCalledWith('3볼');
  });

  test('2스트라이크 문구를 출력한다.', () => {
    const message = new Message();
    const logSpy = getLogSpy();

    message.print(Message.count(0, 2));

    expect(logSpy).toHaveBeenCalledWith('2스트라이크');
  });
});
