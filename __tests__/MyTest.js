// const MissionUtils = require("@woowacourse/mission-utils");
// const BaseballGame = require("../src/BaseballGame");
// const GameUtils = require("../src/GameUtils");
// const Validate = require("../src/Validate");
// const BaseballModel = require("../src/BaseballModel");
// const myConsole = MissionUtils.Console;

// beforeAll((done) => {
//   done();
// });
// afterAll((done) => {
//   done();
// });

// describe("컴퓨터 넘버 테스트", () => {
//   test("컴퓨터의 숫자 배열의 길이는 3 입니다.", () => {
//     expect(BaseballGame.createRandom().length).toBe(3);
//   });
//   test("컴퓨터의 숫자 타입은 'number' 입니다.", () => {
//     BaseballGame.createRandom().forEach((number) => {
//       expect(typeof number).toBe("number");
//     });
//   });
// });

// describe("유저 입력 테스트", () => {
//   test("유저입력은 배열을 반환합니다.", () => {
//     const text = "312";
//     const testArr = GameUtils.userInputToNumberArr(text);
//     expect(testArr instanceof Array).toBe(true);
//   });

//   test("유저 입력 타입은 'number'입니다.", () => {
//     const text = "312";
//     const testArr = GameUtils.userInputToNumberArr(text);
//     testArr.forEach((number) => {
//       expect(typeof number).toBe("number");
//     });
//   });

//   test("유저 입력의 길이는 3 입니다.", () => {
//     const text = "312";
//     const testArr = GameUtils.userInputToNumberArr(text);
//     expect(testArr.length).toBe(3);
//   });

//   test("유저가 잘못 입력하면 에러를 발생시킵니다.", () => {
//     const text = "d1d";
//     expect(() => Validate.userGuessNumbers(text)).toThrow();
//   });
// });

// describe("게임진행 테스트", () => {
//   test("숫자를 입력하면 게임 결과를 판단합니다.", () => {
//     const number = [1, 2, 3];
//     const random = [1, 2, 3];
//     expect(GameUtils.evaluScore(number, random)).toEqual({
//       strike: 3,
//       ball: 0,
//     });
//   });

//   test("게임결과를 입력하면 스트링을 반환합니다.", () => {
//     const result = { strike: 3, ball: 0 };
//     expect(GameUtils.printFormat(result)).toBe("3스트라이크");
//   });
// });
