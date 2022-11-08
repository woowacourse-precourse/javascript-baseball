const { Console } = require("@woowacourse/mission-utils");
const Controller = require("../src/controller/Controller");

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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
});

afterAll(() => {
  Console.close();
});
