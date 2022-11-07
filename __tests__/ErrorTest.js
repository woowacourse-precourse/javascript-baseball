const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');
const App = require('../src/App');

describe('에러 테스트', () => {
  test('게임 종료후 재시작 여부의 잘못된 입력', () => {
    const randoms = [1, 2, 3];
    const answers = ['123', '3', '2'];
    const logSpy = getLogSpy();
    const message = [
      '3스트라이크',
      '게임 종료',
      '올바른 입력이 아닙니다.',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
