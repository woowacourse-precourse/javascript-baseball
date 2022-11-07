const App = require('../src/App');
const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');

const mockAnswer = jest.requireMock('../src/constants/answer');
jest.mock('../src/Constants/Answer');

describe('3자릿수가 아닌 자릿수의 숫자야구 게임 해보기', () => {
  test('4자릿수의 숫자 야구', () => {
    const randoms = [1, 2, 3, 4];
    const answers = ['1245', '1254', '1234', '2'];
    const logSpy = getLogSpy();
    const message = [
      '1볼 2스트라이크',
      '3스트라이크',
      '4스트라이크',
      '게임 종료',
    ];

    mockQuestions(answers);
    mockRandoms(randoms);
    mockAnswer.LENGTH = 4;

    const app = new App();
    app.play();

    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
