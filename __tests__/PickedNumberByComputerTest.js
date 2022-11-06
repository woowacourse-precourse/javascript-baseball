const { Console, Random } = require("@woowacourse/mission-utils");
const PickedNumberByComputer = require("../src/baseball/PickedNumberByComputer");

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("랜덤 숫자 테스트", () => {
  test("랜덤으로 뽑은 숫자 3개 반환", () => {
    // given
    const randoms = [1, 5, 9];
    mockRandoms(randoms);

    // when
    const randomNumbers = PickedNumberByComputer.randomNumInRange();

    // then
    expect(Array.isArray(randomNumbers)).toEqual(true);
    expect(randomNumbers.length).toEqual(3);
  });

  test("랜덤으로 뽑은 숫자 3개 중복 안됨", () => {
    // given
    const randoms = [1, 2, 2, 2, 9];
    mockRandoms(randoms);

    // when
    const randomNumbers = PickedNumberByComputer.randomNumInRange();
    const randomNumbersSet = new Set(randomNumbers);

    // then
    expect(randomNumbers.length === randomNumbersSet.size).toEqual(true);
    expect(randomNumbers).toEqual([1, 2, 9]);
  });
});

afterAll(() => {
  Console.close();
});
