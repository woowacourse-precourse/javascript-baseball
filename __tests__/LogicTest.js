const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 로직 테스트", () => {
  test("시작 문구", () => {
    const app = new App();
    expect(() => "...").toThrow("시작 문구가 나오지 않음");
  });

  test("입력 문구", () => {
    const app = new App();
    expect(() => "...").toThrow("입력 문구가 나오지 않음");
  });

  test("재시작 문구", () => {
    const app = new App();
    expect(() => "...").toThrow("재시작 문구가 나오지 않음");
  });

  test("종료 문구", () => {
    const app = new App();
    expect(() => "...").toThrow("종료 문구가 나오지 않음");
  });

  test("플레이어 숫자 입력 체크1", () => {
    const app = new App();
    expect(() => "...").toThrow("입력 input의 타입은 number여야 합니다.");
  });

  test("플레이어 숫자 입력 체크2", () => {
    const app = new App();
    expect(() => "...").toThrow("입력 input은 1~9사이 숫자여야 합니다.");
  });

  test("플레이어 숫자 입력 체크3", () => {
    const app = new App();
    expect(() => "...").toThrow("입력 input은 3자리여야 합니다.");
  });

  test("플레이어 숫자 입력 체크4", () => {
    const app = new App();
    expect(() => "...").toThrow(
      "입력 input은 중복되지 않은 숫자로 이루어져야 합니다."
    );
  });

  test("게임 : 판별로직1", () => {
    const app = new App();
    expect(() => "...").toEqual("3 스트라이크");
  });

  test("게임 : 판별로직2", () => {
    const app = new App();
    expect(() => "...").toEqual("3 볼");
  });

  test("게임 : 판별로직3", () => {
    const app = new App();
    expect(() => "...").toEqual("3 낫싱");
  });

  //   test("게임 : 판별로직4", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("2스트라이크 1볼");
  //   });
  //   test("게임 : 판별로직5", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("2스트라이크 1낫싱");
  //   });
  //   test("게임 : 판별로직6", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("1스트라이크 2볼");
  //   });
  //   test("게임 : 판별로직7", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("2볼 1낫싱");
  //   });
  //   test("게임 : 판별로직8", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("1스트라이크 2낫싱");
  //   });
  //   test("게임 : 판별로직9", () => {
  //     const app = new App();
  //     expect(() => "...").toEqual("1볼 2낫싱");
  //   });

  test("게임 : 판별로직10", () => {
    const app = new App();
    expect(() => "...").toEqual("1스트라이크 1볼 1낫싱");
  });

  test("종료 후 선택 : 재시작", () => {
    "재시작";
  });

  test("종료 후 선택 : 종료", () => {
    "종료";
  });
});
