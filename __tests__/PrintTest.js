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

  test('컴퓨터의 숫자와 플레이어 숫자의 비교 결과 메세지 출력 테스트', () => {
    const printer = new Printer();
    const answers = [
      { ballCount: 0, strikeCount: 0 },
      { ballCount: 1, strikeCount: 0 },
      { ballCount: 0, strikeCount: 2 },
      { ballCount: 2, strikeCount: 1 },
      { ballCount: 1, strikeCount: 1 },
      { ballCount: 3, strikeCount: 0 },
      { ballCount: 0, strikeCount: 3 },
    ];
    const messages = [
      '낫싱',
      '1볼',
      '2스트라이크',
      '2볼 1스트라이크',
      '1볼 1스트라이크',
      '3볼',
      '3스트라이크',
    ];
    const logSpy = getLogSpy();

    messages.forEach((message, index) => {
      printer.showResult(answers[index].ballCount, answers[index].strikeCount);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });
});
