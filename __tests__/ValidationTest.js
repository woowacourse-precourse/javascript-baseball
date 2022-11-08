const Validator = require("./../src/Validator");

describe("사용자 입력값 오류 테스트 : 게임 진행 시", () => {
  test("입력값 예외 테스트: 특수문자가 포함될 때", () => {
    const input = "3~6";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });

  test("입력값 예외 테스트: 아무것도 입력하지 않았을 때", () => {
    const input = "";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });

  test("입력값 예외 테스트: 띄어쓰기가 포함될 때", () => {
    const input = "3 4";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });

  test("입력값 예외 테스트: 자리수가 3자리보다 많을 때", () => {
    const input = "1212";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });

  test("입력값 예외 테스트: 자리수가 3자리보다 적을 때", () => {
    const input = "1";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });

  test("입력값 예외 테스트: 한글을 입력했을 때", () => {
    const input = "가나다";
    const validator = new Validator();
    const errorFn = () => validator.isGameNumberInput(input);

    expect(errorFn).toThrow(TypeError);
  });
});
