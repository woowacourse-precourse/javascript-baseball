const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestion = answer => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementation((question, callback) => {
    callback(answer);
  });
};

describe('입력값 테스트', () => {
  test('서로 다른 3자리 숫자가 입력되지 않았을 때 예외 발생', () => {
    mockQuestion('1234');

    expect(() => {
      const app = new App();
      app.askUserInput();
    }).toThrow();
  });

  test('1과 2중 하나의 숫자가 입력되지 않았을 때 예외 발생', () => {
    mockQuestion('3');

    expect(() => {
      const app = new App();
      app.askRestartOrEnd();
    }).toThrow();
  });
});
