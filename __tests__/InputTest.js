const Input = require("../src/Input");

describe("Input 테스트", () => {
  test("Input.toNumbers() 메서드는 숫자로 이루어진 문자열을 숫자로 이루어진 배열로 반환해야 합니다.", () => {
    const input = "486";
    const result = Input.toNumbers(input);

    expect(result).toEqual([4, 8, 6]);
  });

  test("Input.isLengthThree() 메서드는 주어진 배열의 길이가 3이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [2, 7, 5];
    const result = Input.isLengthThree(input);

    expect(result).toEqual(true);
  });

  test("Input.isLengthThree() 메서드는 주어진 배열의 길이가 3이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [9, 3];
    const result = Input.isLengthThree(input);

    expect(result).toEqual(false);
  });

  test("Input.isLengthThree() 메서드는 주어진 배열의 길이가 3이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [5, 1, 8, 7];
    const result = Input.isLengthThree(input);

    expect(result).toEqual(false);
  });

  test("Input.isBetweenOneAndNine() 메서드는 주어진 배열의 모든 요소가 1과 9 사이이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [9, 1, 4];
    const result = Input.isBetweenOneAndNine(input);

    expect(result).toEqual(true);
  });

  test("Input.isBetweenOneAndNine() 메서드는 주어진 배열의 모든 요소가 1과 9 사이이면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [2, 0, 9];
    const result = Input.isBetweenOneAndNine(input);

    expect(result).toEqual(false);
  });

  test("Input.hasDuplicates() 메서드는 주어진 배열에 중복된 요소가 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 6, 4];
    const result = Input.hasDuplicates(input);

    expect(result).toEqual(true);
  });

  test("Input.hasDuplicates() 메서드는 주어진 배열에 중복된 요소가 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 6, 8];
    const result = Input.hasDuplicates(input);

    expect(result).toEqual(false);
  });

  test("Input.isValid() 메서드는 주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 8, 6];
    const result = Input.isValid(input);

    expect(result).toEqual(true);
  });

  test("Input.isValid() 메서드는 주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 8, 6, 2];
    const result = Input.isValid(input);

    expect(result).toEqual(false);
  });

  test("Input.isValid() 메서드는 주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 8];
    const result = Input.isValid(input);

    expect(result).toEqual(false);
  });

  test("Input.isValid() 메서드는 주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 8, 0];
    const result = Input.isValid(input);

    expect(result).toEqual(false);
  });

  test("Input.isValid() 메서드는 주어진 배열이 1부터 9까지 서로 다른 3개의 수로 이루어져 있으면 true를 반환하고, 그렇지 않으면 false를 반환해야 합니다.", () => {
    const input = [4, 8, 8];
    const result = Input.isValid(input);

    expect(result).toEqual(false);
  });
});
