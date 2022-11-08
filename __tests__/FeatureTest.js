const App = require("../src/App");
const app = new App();

describe("기능 테스트", () => {
    test("1. 시작 문구 출력 기능", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        app.openingOutput();
        expect(consoleSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
    });
    test("2. 컴퓨터의 수 랜덤으로 생성 기능", () => {
        const TEST_LIST = app.createRandomValue();
        expect(TEST_LIST.length).toBe(3);

        TEST_LIST.forEach(number => {
            expect(number).toBeGreaterThan(0);
            expect(number).toBeLessThan(10);
        })
    })
});