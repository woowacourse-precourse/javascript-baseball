const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("기능 테스트", () => {
    test("resultMsg 함수 테스트", () => {
        const app = new App;
        const strike = 1;
        const ball = 0;
        const result = app.resultMsg(strike, ball);

        expect(result).toEqual("1스트라이크");
    });

    test("resultMsg 함수 테스트", () => {
        const app = new App;
        const strike = 1;
        const ball = 2;
        const result = app.resultMsg(strike, ball);

        expect(result).toEqual("2볼 1스트라이크");
    });

    test("resultMsg 함수 테스트", () => {
        const app = new App;
        const strike = 0;
        const ball = 0;
        const result = app.resultMsg(strike, ball);

        expect(result).toEqual("낫싱");
    });
});