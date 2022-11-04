const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 테스트', () => {
  test('게임 시작 문구를 출력한다.', () => {
    const message = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('스트라이크와 볼의 갯수를 구한다.', () => {
    const randoms = ['1', '3', '5'];
    const answers = ['789', '123'];
    const counts = [
      { strike: 0, ball: 0 },
      { strike: 1, ball: 1 },
    ];

    const app = new App();

    counts.forEach((count, i) => {
      expect(app.getStrikeBallCount(answers[i], randoms)).toStrictEqual(count);
    });
  });

  test('스트라이크 볼 결과 메세지를 구한다.', () => {
    const counts = [
      { strike: 0, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 0, ball: 3 },
      { strike: 1, ball: 0 },
    ];
    const messages = ['낫싱', '1볼 1스트라이크', '3볼', '1스트라이크'];

    const app = new App();

    messages.forEach((message, i) => {
      expect(app.getResult(counts[i])).toEqual(message);
    });
  });
});
