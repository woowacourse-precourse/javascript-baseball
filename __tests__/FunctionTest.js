const MissionUtils = require("@woowacourse/mission-utils");
const Input = require("../src/Input");
const Parse = require("../src/Parse");
const Question = require("../src/Question");
const BallCount = require("../src/BallCount");
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

  test("문제 내기", () => {
    const question = Question.create();

    expect(question.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(question[i]).toBeGreaterThan(0);
      expect(question[i]).toBeLessThan(10);
      expect(Math.floor(question[i])).toBe(question[i]);
    }
    expect(question[0]).not.toBe(question[1]);
    expect(question[0]).not.toBe(question[2]);
    expect(question[1]).not.toBe(question[2]);
  });

  test("스트라이크 개수 세기", () => {
    const question = [1, 2, 3];
    const answer = [1, 2, 4];
    const ballCount = new BallCount(question, answer);
    expect(ballCount.strikes).toBe(2);
  });
});
