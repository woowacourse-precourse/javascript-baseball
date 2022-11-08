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
    
})
