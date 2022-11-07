const App = require("../src/App");
const app = new App();

describe("build_answer 테스트", () => {
    test("3자리 배열 인지 확인", () => {
        const result = app.buildAnswer();
        expect(result).toHaveLength(3);
    });
    test("배열 객체의 타입이 숫자인지 확인", () => {
        const result = app.buildAnswer();
        expect(result[0]).toEqual(expect.any(Number));
        expect(result[1]).toEqual(expect.any(Number));
        expect(result[2]).toEqual(expect.any(Number));
    });
    test("중복없는 세자리 인지 확인", () => {
        const result = app.buildAnswer();
        const set_result = [...new Set(result)]
        expect(set_result).toHaveLength(3);
    });
    test("각 개체가 한자리 숫자인지 확인", () => {
        const result = app.buildAnswer();
        expect(result[0]).toBeLessThan(10);
        expect(result[1]).toBeLessThan(10);
        expect(result[2]).toBeLessThan(10);
    });
    test("첫 숫자가 0이 아닌지 확인", () => {
        const result = app.buildAnswer();
        expect(result[0]).not.toEqual(0);
    });
})
describe("choice_answer 테스트", () => {
    test("3자리 배열 인지 확인", () => {
        const result = app.choiceAnswer('123');
        expect(result).toHaveLength(3);
    });
    test("배열 객체의 타입이 숫자인지 확인", () => {
        const result = app.choiceAnswer('123');
        expect(result[0]).toEqual(expect.any(Number));
        expect(result[1]).toEqual(expect.any(Number));
        expect(result[2]).toEqual(expect.any(Number));
    });
    test("각 개체가 한자리 숫자인지 확인", () => {
        const result = app.choiceAnswer('123');
        expect(result[0]).toBeLessThan(10);
        expect(result[1]).toBeLessThan(10);
        expect(result[2]).toBeLessThan(10);
    });
    test("입력 받은 숫자가 정상 출력 되는지 확인", () => {
        const result = app.choiceAnswer('123');
        const exp = [1,2,3]
        expect(result).toEqual(exp);
    });
})
describe("count_strike 테스트", () => {
    test("도출값 3이하 인지 확인", () => {
        app.answer = [1,5,6];
        app.userSelect = [8,9,3];
        const result = app.countStrike();
        expect(result).toBeLessThanOrEqual(3);
    });
    test("스트라이크가 0인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [0,7,8];
        const result = app.countStrike();
        expect(result).toEqual(0);
    });
    test("스트라이크가 1인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [0,5,8];
        const result = app.countStrike();
        expect(result).toEqual(1);
    });
    test("스트라이크가 2인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [1,5,8];
        const result = app.countStrike();
        expect(result).toEqual(2);
    });
    test("스트라이크가 3인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [1,5,6];
        const result = app.countStrike();
        expect(result).toEqual(3);
    });
    test("스트라이크가 0이면서 ball이 있는 경우", () => {
        app.answer = [1,6,5];
        app.userSelect = [0,5,8];
        const result = app.countStrike();
        expect(result).toEqual(0);
    });
    test("스트라이크가 1이면서 ball이 있는 경우", () => {
        app.answer = [8,5,6];
        app.userSelect = [0,5,8];
        const result = app.countStrike();
        expect(result).toEqual(1);
    });
})
describe("count_ball 테스트", () => {
    test("도출값 3이하 인지 확인", () => {
        app.answer = [1,5,6];
        app.userSelect = [8,9,3];
        const result = app.countBall();
        expect(result).toBeLessThanOrEqual(3);
    });
    test("볼이 0인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [0,3,8];
        const result = app.countBall();
        expect(result).toEqual(0);
    });
    test("볼이 1인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [5,3,8];
        const result = app.countBall();
        expect(result).toEqual(1);
    });
    test("볼이 2인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [5,6,3];
        const result = app.countBall();
        expect(result).toEqual(2);
    });
    test("볼이 3인 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [5,6,1];
        const result = app.countBall();
        expect(result).toEqual(3);
    });
    test("볼이 0이면서 strike이 있는 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [4,5,8];
        const result = app.countBall();
        expect(result).toEqual(0);
    });
    test("볼이 1이면서 strike이 있는 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [0,5,1];
        const result = app.countBall();
        expect(result).toEqual(1);
    });
    test("볼이 2이면서 strike이 있는 경우", () => {
        app.answer = [1,5,6];
        app.userSelect = [6,5,1];
        const result = app.countBall();
        expect(result).toEqual(2);
    });
})
//print hint는 제공된 테스트 케이스 신뢰