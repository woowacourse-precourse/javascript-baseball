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
