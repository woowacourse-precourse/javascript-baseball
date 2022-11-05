const App = require("../src/App.js");

describe("입력이 올바른지 판단 테스트", () => {
    const APP = new App();
    test("123은 올바른 입력이다", () => {
        const RESULT = APP.isValidInput("123");
        expect(RESULT).toEqual(true);
    });

    test("1234는 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("1234");
        expect(RESULT).toEqual(false);
    });

    test("120은 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("120");
        expect(RESULT).toEqual(false);
    });

    test("12a는 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("12a");
        expect(RESULT).toEqual(false);
    });

    test("133은 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("133");
        expect(RESULT).toEqual(false);
    })
})