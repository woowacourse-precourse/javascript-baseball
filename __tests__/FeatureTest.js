const App = require("../src/App");
const app = new App();

describe("기능 테스트", () => {
    test("1. 시작 문구 출력 기능", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        app.openingOutput();
        expect(consoleSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
    });
});