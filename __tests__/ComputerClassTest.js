const Computer = require("../src/Computer");

describe("컴퓨터 모듈 테스트", () => {
  const computer = new Computer();
  test("생성된 랜덤 값이 중복을 가지고 있는지", () => {
    let randomNumberArray = computer.correctNumber.split("");
    expect(
      randomNumberArray
        .filter((v, i) => randomNumberArray.indexOf(v) !== i)
        .join("")
    ).toEqual("");
  });

  test("생성된 랜덤 값이 올바른 범위의 숫자만 포함하는지", () => {
    const randomNumber = computer.correctNumber.replace(/[1-9]/g, "");
    expect(randomNumber).toEqual("");
  });
});
