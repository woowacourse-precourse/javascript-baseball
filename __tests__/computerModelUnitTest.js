const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const ComputerModel = require("../src/ComputerModel");
const UserModel = require("../src/UserModel");

const computerModel = new ComputerModel();
const userModel = new UserModel();

describe("ComputerModel 단위테스트", () => {
  test("setNumberIntoSpace 함수 테스트", () => {
    const space = [];
    expect(space.length).toEqual(0);
    computerModel.setNumberIntoSpace(space);
    expect(space.length).toEqual(3);
  });

  test("컴퓨터의 생성 숫자는 1~9사이 인가?", () => {
    const numberFromComputer = computerModel.getRandomNumberInRange(1, 9);

    expect(numberFromComputer > 0 && numberFromComputer < 10).toEqual(true);
  });

  test("숫자가 공간안에 중복으로 저장되어있지 않다?", () => {
    const space = [1, 2, 3];

    expect(computerModel.isNumberNotInSpace(1, space)).toEqual(false);
    expect(computerModel.isNumberNotInSpace(5, space)).toEqual(true);
  });

  test("공간이 가득 차 있지 않다?", () => {
    const space = [1, 2, 3];
    expect(computerModel.isSpaceNotFull(space)).toEqual(false);
    space.shift();
    expect(computerModel.isSpaceNotFull(space)).toEqual(true);
  });

  test("최종적으로 컴퓨터 숫자는 유효한가?", () => {
    const isValid = (numberSpace) => userModel.isInputNumbersValid(numberSpace.join(""));
    const numberFromComputer = computerModel.getNumberFromComputer();

    expect(isValid(numberFromComputer)).toEqual(numberFromComputer.join(""));
  });
});
