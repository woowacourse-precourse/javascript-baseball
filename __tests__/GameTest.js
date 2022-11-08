const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const GameLogic = require("../src/GameLogic");
const Input = require("../src/Input");
const { ERROR_MESSAGE, INGAME_MESSAGE } = require("../src/Constant");
const Validation = require("../src/Validation");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

// describe("게임 문구 테스트", () => {
//   test("시작 문구", () => {
//     const app = new App();
//     const logSpy = getLogSpy();
//     app.play();
//     expect(logSpy).toHaveBeenCalledWith(
//       expect.stringContaining(INGAME_MESSAGE.START)
//     );
//   });
//   test("입력 문구", () => {
//     const gameLogic = new GameLogic();
//     const input = new Input();
//     const computerNumber = input.computer();
//     const logSpy = getLogSpy();
//     gameLogic.implement(computerNumber);
//     expect(logSpy).toHaveBeenCalledWith(
//       expect.stringContaining(INGAME_MESSAGE.INPUT_NUMBER)
//     );
//   });
//   test("종료 문구", () => {
//     const app = new App();
//     const logSpy = getLogSpy();
//     app.play();
//     expect(logSpy).toHaveBeenCalledWith(
//       expect.stringContaining(INGAME_MESSAGE.END)
//     );
//   });
//   test("재시작 문구", () => {
//     const app = new App();
//     const logSpy = getLogSpy();
//     app.play();
//     expect(logSpy).toHaveBeenCalledWith(
//       expect.stringContaining(INGAME_MESSAGE.ASK)
//     );
//   });
// });

describe("플레이어 입력 테스트", () => {
  test("플레이어 숫자 입력 체크1 : 자릿수", () => {
    const validation = new Validation();
    expect(() => validation.checkLength([1, 2, 3, 4])).toThrow(
      ERROR_MESSAGE.INPUT_LENGTH
    );
  });

  test("플레이어 숫자 입력 체크2 : 숫자", () => {
    const validation = new Validation();
    expect(() => validation.checkNumber([1, 2, "a"])).toThrow(
      ERROR_MESSAGE.INPUT_NUMBER
    );
  });

  test("플레이어 숫자 입력 체크3 : 숫자 (0제외)", () => {
    const validation = new Validation();
    expect(() => validation.checkNumber([0, 2, 1])).toThrow(
      ERROR_MESSAGE.INPUT_NUMBER
    );
  });

  test("플레이어 숫자 입력 체크4 : 중복", () => {
    const validation = new Validation();
    expect(() => validation.checkRepeat([1, 2, 2])).toThrow(
      ERROR_MESSAGE.INPUT_REPEAT
    );
  });
});

describe("게임 로직 테스트", () => {
  test("게임 : 판별로직1", () => {
    const gameLogic = new GameLogic();
    const logSpy = getLogSpy();
    gameLogic.result([0, 3]);
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
  });

  test("게임 : 판별로직2", () => {
    const gameLogic = new GameLogic();
    const logSpy = getLogSpy();
    gameLogic.result([3, 0]);
    expect(logSpy).toHaveBeenCalledWith("3볼");
  });

  test("게임 : 판별로직3", () => {
    const gameLogic = new GameLogic();
    const logSpy = getLogSpy();
    gameLogic.result([0, 0]);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("게임 : 판별로직4", () => {
    const gameLogic = new GameLogic();
    const logSpy = getLogSpy();
    gameLogic.result([1, 2]);
    expect(logSpy).toHaveBeenCalledWith("1볼 2스트라이크");
  });
});

// describe("종료/재시작 테스트", () => {
//   test("종료 후 선택 : 재시작", () => {
//     "재시작";
//   });

//   test("종료 후 선택 : 종료", () => {
//     "종료";
//   });
// });
