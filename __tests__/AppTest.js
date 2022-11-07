const App = require('../src/App');

describe('App class 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });
  test('play 동작시 computer selectedNumber 랜덤 설정여부 확인', () => {
    app.play();

    expect(app.computer.selectedNumber.length).toBe(3);
  });
});
