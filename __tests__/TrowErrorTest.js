const { Console } = require("@woowacourse/mission-utils");
const Controller = require("../src/controller/Controller");

describe("Error throw 테스트", () => {
  test("유저 제시 수 invalid 할 때", () => {
    const controller = new Controller(true);

    controller.computerNumber.setState(["1", "2", "3"]);

    expect(() => {
      controller.updateUserGivenNumber("");
    }).toThrow();

    expect(() => {
      controller.updateUserGivenNumber("122");
    }).toThrow();

    expect(() => {
      controller.updateUserGivenNumber(";,?");
    }).toThrow();
  });

  test("재시작 여부 Input invalid 할 때", () => {
    const controller = new Controller(true);

    expect(() => {
      controller.checkIsRestartUserInputValid("");
    }).toThrow();

    expect(() => {
      controller.checkIsRestartUserInputValid("3");
    }).toThrow();

    expect(() => {
      controller.checkIsRestartUserInputValid("zz");
    }).toThrow();

    expect(() => {
      controller.checkIsRestartUserInputValid("?");
    }).toThrow();
  });
});

afterAll(() => {
  Console.close();
});
