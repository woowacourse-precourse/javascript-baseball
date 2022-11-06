const createRandomNumbers = require("../src/createRandomNumbers");

describe("createRandomNumbers 테스트", () => {
  test("createRandomNumbers() 메서드는 길이가 3인 배열을 반환해야 합니다.", () => {
    const result = createRandomNumbers();

    expect(result.length).toEqual(3);
  });

  test("createRandomNumbers() 메서드는 1부터 9까지의 수를 요소로 가진 배열을 반환해야 합니다.", () => {
    const input = createRandomNumbers();
    const result = input.filter((number) => number >= 1 && number <= 9);

    expect(result.length).toEqual(3);
  });

  test("createRandomNumbers() 메서드는 중복된 요소가 없는 배열을 반환해야 합니다.", () => {
    const input = createRandomNumbers();
    const result = new Set(input);

    expect(result.size).toEqual(3);
  });
});
