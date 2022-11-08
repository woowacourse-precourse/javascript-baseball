const getResultMessage = require("../src/functions/getResultMessage");
const isInvalidCmd = require("../src/functions/isInvalidCmd");
const isInvalidNumber = require("../src/functions/isInvalidNumber");
const makeRandomNumber = require("../src/functions/makeRandomNumber");

describe("getResultMessage Function", () => {
  test("낫싱 테스트", () => {
    const answer = "123";
    const userAnswer = "456";
    const result = getResultMessage(answer, userAnswer);
    expect(result).toEqual("낫싱");
  });
  test("3볼 테스트", () => {
    const answer = "123";
    const userAnswer = "312";
    const result = getResultMessage(answer, userAnswer);
    expect(result).toEqual("3볼");
  });
  test("3스트라이크 테스트", () => {
    const answer = "123";
    const userAnswer = "123";
    const result = getResultMessage(answer, userAnswer);
    expect(result).toEqual("3스트라이크");
  });
  test("1스트라이크/2볼 테스트", () => {
    const answer = "123";
    const userAnswer = "132";
    const result = getResultMessage(answer, userAnswer);
    expect(result).toEqual("2볼 1스트라이크");
  });
});

describe("isInvalidCmd Function", () => {
  test("올바른 cmd 입력 테스트", () => {
    const cmd = "1";
    const result = isInvalidCmd(cmd);
    expect(result).toEqual(false);
  });
  test("잘못된 cmd 입력 테스트", () => {
    const cmd = "3";
    const result = isInvalidCmd(cmd);
    expect(result).toEqual(true);
  });
});

describe("isInvalidNumber Function", () => {
  test("3개의 서로 다른 숫자 입력한 경우 (올바른 입력)", () => {
    const number = "123";
    const result = isInvalidNumber(number);
    expect(result).toEqual(false);
  });
  test("3개의 숫자 중 같은 숫자가 있는 경우 (잘못된 입력)", () => {
    const number = "113";
    const result = isInvalidNumber(number);
    expect(result).toEqual(true);
  });
  test("숫자의 개수가 3개가 아닌 경우", () => {
    const number = "1234";
    const result = isInvalidNumber(number);
    expect(result).toEqual(true);
  });
  test("숫자가 아닌 값을 입력한 경우", () => {
    const number = "3r2";
    const result = isInvalidNumber(number);
    expect(result).toEqual(true);
  });
});

describe("makeRandomNumber Function", () => {
  test("올바른 숫자를 반환하는지 테스트", () => {
    const number = makeRandomNumber();
    const result = isInvalidNumber(number);
    expect(result).toEqual(false);
  });
});
