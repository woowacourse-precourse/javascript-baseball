const App = require('../src/App');
const { mockRandoms, mockQuestions } = require('./ApplicationTest');

describe('사용자의 입력 예외 사항 검증하기', () => {
  test('사용자의 입력이 세 글자를 넘어가는 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자의 입력에 숫자가 아닌 다른 글자가 들어간 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['12a'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자의 입력에 중복된 숫자가 들어간 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['112'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
