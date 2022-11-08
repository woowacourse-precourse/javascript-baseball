const GetUserInput = require("../src/input/GetUserInput");

describe("GetUserInput Class Test Operation", () => {
  let user;

  beforeEach(() => {
    user = new GetUserInput();
  });

  test("checkInputValueValid 메소드 정상 입력 테스트", () => {
    const correctInputCases = ["123", "456", "789", "159", "789"];

    correctInputCases.forEach((value) => {
      expect(user.checkInputValueValid(value)).toBeTruthy();
    });
  });

  test("checkInputValueValid 메소드 비정상 입력 테스트", () => {
    const incorrectInputCases = ["12", "1", "155", "12a", "1234"];

    expect(() => {
      incorrectInputCases.forEach((value) => {
        user.checkInputValueValid(value);
      });
    }).toThrow();
  });

  test("getScoreMessage 메소드 결과 카운팅 테스트", () => {
    const nothing = user.getScoreMessage("123", "456");
    const threeBall = user.getScoreMessage("123", "231");
    const threeStrike = user.getScoreMessage("123", "123");

    expect(nothing).toEqual("낫싱");
    expect(threeBall).toEqual("3볼");
    expect(threeStrike).toEqual("3스트라이크");
  });
});
