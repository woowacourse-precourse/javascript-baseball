const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

describe('예외 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('재시작 여부 1, 2 이외의 값 입력시 예외가 발생해야 한다.', () => {
    const invalidInput = ['a'];

    mockQuestions(invalidInput);

    expect(() => {
      const app = new App();
      app.readRestartInput();
    }).toThrow();
  });
});
