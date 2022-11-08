const { Console } = require("@woowacourse/mission-utils");
const Game = require("../src/Game");
const game = new Game();

describe("Game.js 기능 테스트", () => {
    test("getStrikeAndBall함수 결과값 테스트", () => {
        const comNum = [1, 3, 5];
        const userNum = [1, 3, 6]
        const test_result = game.getStrikeAndBall(comNum, userNum);

        expect(test_result).toStrictEqual([2, 0]);
    });

    test("getStrikeAndBall함수 결과값 테스트", () => {
        const comNum = [3, 1, 6];
        const userNum = [1, 3, 6]
        const test_result = game.getStrikeAndBall(comNum, userNum);

        expect(test_result).toStrictEqual([1, 2]);
    });

    test("resultMessage 결과값 테스트", () => {
        const strike = 1;
        const ball = 2;
        const test_result = game.resultMessage(strike, ball);

        expect(test_result).toStrictEqual(Console.print("2볼 1스트라이크"));
    });

    test("resultMessage 결과값 테스트", () => {
        const strike = 0;
        const ball = 0;
        const test_result = game.resultMessage(strike, ball);

        expect(test_result).toStrictEqual(Console.print("낫싱"));
    });
    
})
