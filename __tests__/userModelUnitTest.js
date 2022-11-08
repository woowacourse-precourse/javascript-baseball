const MissionUtils = require("@woowacourse/mission-utils");
const UserModel = require("../src/UserModel");

const userModel = new UserModel();

describe("UserModel 단위테스트", () => {
  test("convertStringToArray 함수 테스트", () => {
    let letter = "145";
    expect(userModel.convertStringToArray(letter)).toEqual([1, 4, 5]);
    letter = "235";
    expect(userModel.convertStringToArray(letter)).toEqual([2, 3, 5]);
  });
  test("convertArgsStringToInt 함수 테스트", () => {
    let letter = "145";
    expect(userModel.convertArgsStringToInt(letter)).toEqual(145);
    letter = "235";
    expect(userModel.convertArgsStringToInt(letter)).toEqual(235);
  });

  test("isNotLengthEqualsThree 함수 테스트", () => {
    let letter = "145";
    expect(userModel.isNotLengthEqualsThree(letter)).toEqual(false);
    letter = "25";
    expect(userModel.isNotLengthEqualsThree(letter)).toEqual(true);
  });
  test("isNotConsistOfOnlyNumber 함수 테스트", () => {
    let letter = "143";
    expect(userModel.isNotConsistOfOnlyNumber(letter)).toEqual(false);
    letter = "a24";
    expect(userModel.isNotConsistOfOnlyNumber(letter)).toEqual(true);
  });
  test("isNotNumberRangeOneToNine 함수 테스트", () => {
    let letter = "143";
    expect(userModel.isNotNumberRangeOneToNine(letter)).toEqual(false);
    letter = "024";
    expect(userModel.isNotNumberRangeOneToNine(letter)).toEqual(true);
  });

  test("isDuplicatedInNumber 함수 테스트", () => {
    let letter = "143";
    expect(userModel.isDuplicatedInNumber(letter)).toEqual(false);
    letter = "644";
    expect(userModel.isDuplicatedInNumber(letter)).toEqual(true);
  });

  test("isInputNumbersValid 함수 테스트", () => {
    let letter = "a42";
    expect(() => userModel.isInputNumbersValid(letter)).toThrow();
    letter = "53";
    expect(() => userModel.isInputNumbersValid(letter)).toThrow();
    letter = "";
    expect(() => userModel.isInputNumbersValid(letter)).toThrow();
  });
});
