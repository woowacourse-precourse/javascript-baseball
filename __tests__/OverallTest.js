const { Console } = require("@woowacourse/mission-utils");
const Controller = require("../src/controller/Controller");

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 전체 테스트", () => {
  const logSpy = getLogSpy();

  test("초기 객체 생성 후 기본작업", () => {
    const controller = new Controller(true);

    controller.init();

    Console.readLine = jest.fn();

    // must be 첫게임
    expect(controller.isFirstGame).toEqual(true);

    // 컴퓨터 지정 수가 올바른지
    expect(
      controller.validation.getIsUserGuessInputValid(
        controller.computerNumber.getState()
      )
    ).toEqual(true);

    // 초기 환영 멘트 출력
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("숫자 야구 게임을 시작합니다.")
    );
  });
});

afterAll(() => {
  Console.close();
});
