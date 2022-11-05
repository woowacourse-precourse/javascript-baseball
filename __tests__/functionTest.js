const App = require("../src/App");

describe('상대방(컴퓨터)의 랜덤 숫자 테스트', () => {
  test('숫자가 세자리가 맞는지 확인', () => {
    const app = new App();
    const result = app.computerInput().length;

    expect(result).toEqual(3);
  });
});