const MissionUtils = require("@woowacourse/mission-utils");
const Input = require("../src/Input");
const Parse = require("../src/Parse");
const { Output } = require("../src/Output");

const getPrintLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능 테스트", () => {
  test("화면에 문구 출력", () => {
    const logSpy = getPrintLogSpy();

    Output.printToUser("Hello");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Hello");
  });

  test("숫자를 배열로 바꾸기", () => {
    const number = 123;
    const parsed = Parse.numberToArray(number);
    expect(parsed).toEqual([1, 2, 3]);
  });

  test("사용자 답 받아오기", () => {
    const answer = 351;

    MissionUtils.Console.readLine = jest.fn((ask, callback) => {
      callback(answer);
    });

    const userAnswer = Input.getUserAnswer();

    expect(userAnswer).toEqual([3, 5, 1]);
  });

  test("재시작 여부 받아오기: 재시작", () => {
    const request = 1;
    const logSpy = getPrintLogSpy();

    MissionUtils.Console.readLine = jest.fn((ask, callback) => {
      callback(request);
    });

    const userWantsReplay = Input.getReplayRequest();

    expect(logSpy).toBeCalledWith("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    expect(userWantsReplay).toBe(true);
  });

  test("재시작 여부 받아오기: 종료", () => {
    const request = 2;
    const logSpy = getPrintLogSpy();

    MissionUtils.Console.readLine = jest.fn((ask, callback) => {
      callback(request);
    });

    const userWantsReplay = Input.getReplayRequest();

    expect(logSpy).toBeCalledWith("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    expect(userWantsReplay).toBe(false);
  });
});
