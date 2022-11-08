const App = require('../src/App');
const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');

describe("[추가] 숫자 야구 게임 기능 테스트", () => {
    test("랜덤 3자리 숫자 생성 테스트", () => {
        const app = new App();
        app.createRandomNumber();
        const result = app.returnNumber();
        expect(result.length).toEqual(3);
      });

    test("", () => {
        const app = new App();


    });

    test("", () => {
        const app = new App();

        
    });

    test("", () => {
        const app = new App();

        
    });
  });
  