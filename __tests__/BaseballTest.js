const Computer = require("../src/function/Computer");
const User = require("../src/function/User");

describe("숫자 야구 게임 테스트", () => {
    test("User: 사용자 입력 검증", () => {
        let result = User.checkUserInput();
        expect(result.length).toEqual(2);
        expect(Array.isArray(result)).toEqual(true);
    })

    test("Computer: 3개의 랜덤 숫자 생성", () => {
        let result = Computer.createRandom();
        expect(result.length).toEqual(3);
    });

    test("Computer: 볼, 스트라이크 개수 반환 (1)", () => {
        let randomNumber = [5, 8, 9];
        let userinput = [5, 9, 7];
        let result = Computer.baseballGame(randomNumber, userinput);
        expect(result).toEqual([1, 1]);
    });

    test("Computer: 볼, 스트라이크 개수 반환 (2)", () => {
        let randomNumber = [1, 3, 5];
        let userinput = [2, 4, 6];
        let result = Computer.baseballGame(randomNumber, userinput);
        expect(result).toEqual([0, 0]);
    });

    test("Computer: 최종 결과 판별 (1)", () => {
        let strike = 0;
        let ball = 0;
        let result = Computer.check3Strike(strike, ball);
        expect(result).toEqual(['not a 3 strike']);
    });

    test("Computer: 최종 결과 판별 (2)", () => {
        let strike = 0;
        let ball = 0;
        let result = Computer.check3Strike(strike, ball);
        expect(result).toEqual(['not a 3 strike']);
    });

    test("Computer: 최종 결과 판별 (3)", () => {
        let strike = 1;
        let ball = 2;
        let result = Computer.check3Strike(strike, ball);
        expect(result).toEqual(['not a 3 strike']);
    });
});