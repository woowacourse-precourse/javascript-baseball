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
    });
    test("4. 잘못된 값이 입력되었을 때 종료하는 기능 - 문자열", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        try { app.valueExceptionHandling('string') } catch (e) { console.log(e) };
        expect(consoleSpy).toHaveBeenCalledWith('입력 값이 숫자가 아닙니다. 게임을 종료합니다.');
    })
    test("4. 잘못된 값이 입력되었을 때 종료하는 기능 - 숫자 길이", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        try { app.valueExceptionHandling('12345') } catch (e) { console.log(e) };
        expect(consoleSpy).toHaveBeenCalledWith('입력 값이 세 자리가 아닙니다. 게임을 종료합니다.');
    })
    test("4. 잘못된 값이 입력되었을 때 종료하는 기능 - 중복 숫자", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        try { app.valueExceptionHandling('122') } catch (e) { console.log(e) };
        expect(consoleSpy).toHaveBeenCalledWith('입력 값에 중복된 수가 있습니다. 게임을 종료합니다.');
    })
});