const App = require("../src/App");

describe("함수 기능 테스트", () => {
    test("selectComputerNumber() 함수로 컴퓨터 숫자 3개를 반환", () => {
        const app =new App();
        const result = app.selectComputerNumber().length;
        expect(result).toEqual(3);
    });
});