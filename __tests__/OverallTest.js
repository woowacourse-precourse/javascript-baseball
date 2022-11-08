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

  test("두번째 게임일시 환영 메시지 미출력", () => {
    const controller = new Controller(false);
    const logSpy = getLogSpy();

    controller.init();

    expect(logSpy).toHaveBeenCalledTimes(0);
  });

  test("입력한 수에 대한 스트라이크,볼,낫싱 결과 출력", () => {
    const controller = new Controller(false);
    const logSpy = getLogSpy();

    controller.init();

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("456");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("145");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1스트라이크"));

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("432");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("2볼"));

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("142");

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("1볼 1스트라이크")
    );

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("456");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
  });

  test("정답 이후 출력", () => {
    const controller = new Controller(true);
    const logSpy = getLogSpy();

    controller.computerNumber.setState(["1", "2", "3"]);
    controller.updateUserGivenNumber("123");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    );
  });
});

afterAll(() => {
  Console.close();
});
