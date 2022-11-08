const ComputerModel = require("../src/ComputerModel");
const UserModel = require("../src/UserModel");

const computerModel = new ComputerModel();
const userModel = new UserModel();

describe("ComputerModel 단위테스트", () => {
  test("setNumberIntoSpace 함수 테스트", () => {
    const space = new Set();
    expect(space.size).toEqual(0);
    computerModel.setNumberIntoSpace(space);
    expect(space.size).toEqual(3);
  });
  test("공간이 가득 차 있지 않다?", () => {
    const space = new Set([1, 2, 3]);
    expect(computerModel.isSpaceNotFull(space)).toEqual(false);
    space.delete(1);
    expect(computerModel.isSpaceNotFull(space)).toEqual(true);
  });

  test("최종적으로 컴퓨터 숫자는 유효한가?", () => {
    const isValid = (numberSpace) => userModel.isInputNumbersValid(numberSpace.join(""));
    const numberFromComputer = computerModel.getNumberFromComputer();

    expect(isValid(numberFromComputer)).toEqual(numberFromComputer.join(""));
  });
});
