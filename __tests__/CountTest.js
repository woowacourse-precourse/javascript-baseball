const Count = require("../src/Count");

describe("Count 테스트", () => {
  test("Count.ball() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 볼의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [3, 5, 7];
    const result = Count.ball(computerNumbers, userNumbers);

    expect(result).toEqual(0);
  });

  test("Count.ball() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 볼의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [3, 5, 4];
    const result = Count.ball(computerNumbers, userNumbers);

    expect(result).toEqual(1);
  });

  test("Count.ball() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 볼의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [3, 6, 4];
    const result = Count.ball(computerNumbers, userNumbers);

    expect(result).toEqual(2);
  });

  test("Count.ball() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 볼의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [8, 6, 4];
    const result = Count.ball(computerNumbers, userNumbers);

    expect(result).toEqual(3);
  });

  test("Count.strike() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 스트라이크의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [3, 5, 4];
    const result = Count.strike(computerNumbers, userNumbers);

    expect(result).toEqual(0);
  });

  test("Count.strike() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 스트라이크의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [4, 5, 8];
    const result = Count.strike(computerNumbers, userNumbers);

    expect(result).toEqual(1);
  });

  test("Count.strike() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 스트라이크의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [4, 8, 5];
    const result = Count.strike(computerNumbers, userNumbers);

    expect(result).toEqual(2);
  });

  test("Count.strike() 메서드는 컴퓨터의 숫자 배열과 유저의 숫자 배열을 인수로 받아서 스트라이크의 개수를 반환해야 합니다.", () => {
    const computerNumbers = [4, 8, 6];
    const userNumbers = [4, 8, 6];
    const result = Count.strike(computerNumbers, userNumbers);

    expect(result).toEqual(3);
  });
});
