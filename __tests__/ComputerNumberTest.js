const Referee = require("../src/Referee");
const { GAME_LENGTH } = require("../src/constants/constants");

describe("컴퓨터 입력값 유효성 검사 테스트", () => {
  test(`길이가 GAME_NUMBER_LENGTH인지 확인`, () => {
    const referee = new Referee();
    const computerNumber = referee.getComputerNumber();
    const computerLength = computerNumber.length;

    expect(computerLength).toBe(GAME_LENGTH);
  });

  test(`중복 숫자가 있는지 확인`, () => {
    const referee = new Referee();
    const computerNumber = referee.getComputerNumber();
    const criteriaComputer = new Set(computerNumber);

    expect(computerNumber.length).toBe(criteriaComputer.size);
  });
});
