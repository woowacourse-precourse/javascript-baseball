const UserInput = require("../src/UserInput");
const userinput = new UserInput();

describe("입력값 테스트", () => {
  test("3자리 숫자인지 확인 case 1", () => {
    expect(() => {
      userinput.checkLength(["1234"]);
    }).toThrow();
  });
  test("3자리 숫자인지 확인 case 2", () => {
    expect(() => {
      userinput.checkLength(["12"]);
    }).toThrow();
  });
  test("범위 밖의 입력값 확인 case 1", () => {
    expect(() => {
      userinput.checkRange(["120"]);
    }).toThrow();
  });
  test("범위 밖의 입력값 확인 case 2", () => {
    expect(() => {
      userinput.checkRange(["1", "2", "a"]);
    }).toThrow();
  });
  test("범위 밖의 입력값 확인 case 3", () => {
    expect(() => {
      userinput.checkRange(["1", "2", "-1"]);
    }).toThrow();
  });
});
