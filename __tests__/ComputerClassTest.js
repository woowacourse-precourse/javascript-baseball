const Computer = require("../src/Computer");

describe("컴퓨터 모듈 테스트", () => {
  const computer = new Computer();
  test("생성한 값은 중복을 포함하지 않는다.", () => {
    let randomNumberArray = computer.correctNumber.split("");
    expect(
      randomNumberArray
        .filter((v, i) => randomNumberArray.indexOf(v) !== i)
        .join("")
    ).toEqual("");
  });

  test("생성한 값은 1부터 9까지의 숫자로 이루어져 있다.", () => {
    const randomNumber = computer.correctNumber.replace(/[1-9]/g, "");
    expect(randomNumber).toEqual("");
  });
});
