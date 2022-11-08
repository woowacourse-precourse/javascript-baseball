const GetComputerInput = require("../src/input/GetComputerInput");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("GetComputerInput Class Test Operation", () => {
  const computer = new GetComputerInput();
  const correctComputerNumbers = computer.makeRandomNumbers();

  test("makeRandomNumbers 메소드 정상 숫자 생성 테스트", () => {
    const checkDuplicate = [...new Set(correctComputerNumbers)].join("");
    const checkLength = correctComputerNumbers.length;

    expect(checkDuplicate === correctComputerNumbers).toBeTruthy();
    expect(checkLength).toEqual(3);
  });
});
