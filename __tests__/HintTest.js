const getHint = require("../src/Hint");

describe("힌트 산출 테스트", () => {
  test('볼과 스트라이크가 함께 있을 때는 "~볼 ~스트라이크"가 출력된다.', () => {
    const correctNumber = ["123", "456", "789", "159", "753"];
    const inputNumber = ["321", "461", "981", "519", "715"];
    const answer = [
      "2볼 1스트라이크",
      "1볼 1스트라이크",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "1볼 1스트라이크",
    ];

    for (let i = 0; i < 5; i++) {
      expect(getHint(correctNumber[i], inputNumber[i])).toEqual(answer[i]);
    }
  });

  test('블, 스트라이크 모두 없을 때는 "낫싱"이 출력된다', () => {
    const correctNumber = ["123", "456", "789", "159", "753"];
    const inputNumber = ["456", "789", "123", "743", "149"];
    const answer = "낫싱";

    for (let i = 0; i < 5; i++) {
      expect(getHint(correctNumber[i], inputNumber[i])).toEqual(answer);
    }
  });

  test('스트라이크만 존재할 때는 "~스트라이크"가 출력된다.', () => {
    const correctNumber = ["123", "456", "789", "159", "753"];
    const inputNumber = ["167", "126", "189", "459", "753"];
    const answer = [
      "1스트라이크",
      "1스트라이크",
      "2스트라이크",
      "2스트라이크",
      "3스트라이크",
    ];

    for (let i = 0; i < 5; i++) {
      expect(getHint(correctNumber[i], inputNumber[i])).toEqual(answer[i]);
    }
  });

  test('볼만 존재할 때는 "~볼 "이 출력된다.', () => {
    const correctNumber = ["123", "456", "789", "159", "753"];
    const inputNumber = ["614", "124", "578", "931", "375"];
    const answer = ["1볼 ", "1볼 ", "2볼 ", "2볼 ", "3볼 "];

    for (let i = 0; i < 5; i++) {
      expect(getHint(correctNumber[i], inputNumber[i])).toEqual(answer[i]);
    }
  });
});
