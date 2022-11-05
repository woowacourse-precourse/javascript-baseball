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

describe("스트라이크와 볼 판단 테스트", () => {
    const APP = new App();
    const ANSWER = [3, 4, 5];

    test("123은 1볼이다", () => {
        const RESULT = APP.getResult("123", ANSWER);
        expect(RESULT).toEqual({ strike: 0, ball: 1 });
    })

    test("389는 1스트라이크이다", () => {
        const RESULT = APP.getResult("389", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 0 });
    })

    test("356은 1볼 1스트라이크이다", () => {
        const RESULT = APP.getResult("356", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 1 });
    })

    test("543은 2볼 1스트라이크이다", () => {
        const RESULT = APP.getResult("543", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 2 });
    })

    test("678은 낫띵이다", () => {
        const RESULT = APP.getResult("678", ANSWER);
        expect(RESULT).toEqual({ strike: 0, ball: 0 });
    })
})