const App = require("../src/App");
const app = new App();

describe("build_answer 테스트", () => {
    test("3자리 배열 인지 확인", () => {
        const result = app.build_answer();
        expect(result).toHaveLength(3);
    });
    test("배열 객체의 타입이 숫자인지 확인", () => {
        const result = app.build_answer();
        expect(result[0]).any(number);
        expect(result[1]).any(number);
        expect(result[2]).any(number);
    });
    test("중복없는 세자리 인지 확인", () => {
        const result = app.build_answer();
        const set_result = [...new Set(result)]
        expect(set_result).toHaveLength(3);
    });
    test("각 개체가 한자리 숫자인지 확인", () => {
        const result = app.build_answer();
        expect(result[0]).toBeLessThan(10);
        expect(result[1]).toBeLessThan(10);
        expect(result[2]).toBeLessThan(10);
    });
})
describe("choice_answer 테스트", () => {
    test("3자리 배열 인지 확인", () => {
        const result = app.choice_answer(123);
        expect(result).toHaveLength(3);
    });
    test("배열 객체의 타입이 숫자인지 확인", () => {
        const result = app.choice_answer(123);
        expect(result[0]).any(Number);
        expect(result[1]).any(Number);
        expect(result[2]).any(Number);
    });
    test("입력값이 중복있을떄 예외확인", () => {
        expect(app.choice_answer(222)).toThrow();
    });
    test("각 개체가 한자리 숫자인지 확인", () => {
        const result = app.choice_answer(123);
        expect(result[0]).toBeLessThan(10);
        expect(result[1]).toBeLessThan(10);
        expect(result[2]).toBeLessThan(10);
    });
    test("입력 받은 숫자가 정상 출력 되는지 확인", () => {
        const result = app.choice_answer(123);
        const exp = [1,2,3]
        expect(result).toEqual(exp);
    });
})
describe("count_strike 테스트", () => {
    test("도출값 3이하 인지 확인", () => {
        const result = app.count_strike([1,5,6],[8,9,3]);
        expect(result).toBeLessThanOrEqual(3);
    });
    test("스트라이크가 0인 경우", () => {
        const result = app.count_strike([1,5,6],[0,7,8]);
        expect(result).toEqual(0);
    });
    test("스트라이크가 1인 경우", () => {
        const result = app.count_strike([1,5,6],[0,5,8]);
        expect(result).toEqual(1);
    });
    test("스트라이크가 2인 경우", () => {
        const result = app.count_strike([1,5,6],[1,5,8]);
        expect(result).toEqual(2);
    });
    test("스트라이크가 3인 경우", () => {
        const result = app.count_strike([1,5,6],[1,5,6]);
        expect(result).toEqual(3);
    });
    test("스트라이크가 0이면서 ball이 있는 경우", () => {
        const result = app.count_strike([1,6,5],[0,5,8]);
        expect(result).toEqual(0);
    });
    test("스트라이크가 1이면서 ball이 있는 경우", () => {
        const result = app.count_strike([8,5,6],[0,5,8]);
        expect(result).toEqual(1);
    });
})
describe("count_ball 테스트", () => {
    test("도출값 3이하 인지 확인", () => {
        const result = app.count_strike([1,5,6],[8,9,3]);
        expect(result).toBeLessThanOrEqual(3);
    });
    test("볼이 0인 경우", () => {
        const result = app.count_strike([1,5,6],[0,3,8]);
        expect(result).toEqual(1);
    });
    test("볼이 1인 경우", () => {
        const result = app.count_strike([1,5,6],[5,3,8]);
        expect(result).toEqual(1);
    });
    test("볼이 2인 경우", () => {
        const result = app.count_strike([1,5,6],[5,6,3]);
        expect(result).toEqual(2);
    });
    test("볼이 3인 경우", () => {
        const result = app.count_strike([1,5,6],[5,6,1]);
        expect(result).toEqual(3);
    });
    test("볼이 0이면서 strike이 있는 경우", () => {
        const result = app.count_strike([1,5,6],[4,5,8]);
        expect(result).toEqual(1);
    });
    test("볼이 1이면서 strike이 있는 경우", () => {
        const result = app.count_strike([1,5,6],[0,5,1]);
        expect(result).toEqual(1);
    });
    test("볼이 2이면서 strike이 있는 경우", () => {
        const result = app.count_strike([1,5,6],[6,5,1]);
        expect(result).toEqual(1);
    });
})
//print hint는 제공된 테스트 케이스 신뢰