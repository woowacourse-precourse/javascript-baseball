//    npm test Retry.js

const ComputerInput = require("../src/ComputerInput");
const CheckInputValid = require("../src/CheckInputValid");
const { ERROR } = require("../src/data/Constants");
describe("Computer에서 랜덤숫자 배열 추출", () => {
  const computerInput = ComputerInput();
  test("컴퓨터에서 받아온 숫자가 중복이 없고 길이가 3인지 확인", () => {
    const checkDuplicates = new Set(computerInput).size;

    expect(checkDuplicates).toBe(3);
  });
});

describe("UserInput과 관련된 테스트", () => {
  const checkInputValid = new CheckInputValid();
  test("유효성 체크: 1~9 사이의 숫자인지", () => {
    expect(checkInputValid.checkUserInput(["1", "2", "3"])).toBe(
      ERROR.USER_INPUT_PASS
    );
    expect(checkInputValid.checkUserInput(["1", "0", "2"])).toBe(
      ERROR.USER_INPUT_RANGE
    );
  });
  test("유효성체크: 입력값에 중복이 있는지", () => {
    expect(checkInputValid.checkUserInput(["1", "1", "1"])).toBe(
      ERROR.USER_INPUT_DUPLICATES
    );
  });

  test("유효성체크: 입력값의 길이가 3인지", () => {
    expect(checkInputValid.checkUserInput(["1", "2", "3", "4"])).toBe(
      ERROR.USER_INPUT_LENGTH
    );
  });
});
