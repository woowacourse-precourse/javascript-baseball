const { describe, expect, test } = require("@jest/globals");
const validation = require("../src/libs/validation");

describe("validation.checkPlayerAnswer() 테스트", () => {
  test.each([["123"], ["456"], ["258"]])(
    "validation.checkPlayerAnswer(%s) => true",
    (palyerAnswer) => {
      expect(validation.checkPlayerAnswer(palyerAnswer)).toBeTruthy();
    }
  );

  test.each([["abc"], ["a12"], ["가나다라"], ["안녕"], ["2!!"], ["^^"]])(
    "validation.checkPlayerAnswer(%s) => 숫자가 아닌 값이 포함되어 있어 false를 반환",
    (palyerAnswer) => {
      expect(validation.checkPlayerAnswer(palyerAnswer)).toBeFalsy();
    }
  );

  test.each([["2687"], ["7896"], ["12"], ["98"], ["7"], ["123456789"]])(
    "validation.checkPlayerAnswer(%s) => 3자리 숫자가 아니므로 false를 반환",
    (palyerAnswer) => {
      expect(validation.checkPlayerAnswer(palyerAnswer)).toBeFalsy();
    }
  );

  test.each([["120"], ["950"], ["201"], ["048"]])(
    "validation.checkPlayerAnswer(%s) => 0이 포함되어 있어 false를 반환",
    (palyerAnswer) => {
      expect(validation.checkPlayerAnswer(palyerAnswer)).toBeFalsy();
    }
  );

  test.each([["115"], ["355"], ["181"], ["777"]])(
    "validation.checkPlayerAnswer(%s) => 중복된 숫자가 있어 false를 반환",
    (palyerAnswer) => {
      expect(validation.checkPlayerAnswer(palyerAnswer)).toBeFalsy();
    }
  );
});

describe("validation.checkPlayerOption() 테스트", () => {
  test.each([["1"], ["2"]])(
    "validation.checkPlayerOption(&s) => 올바른 입력 이므로 true를 반환",
    (option) => {
      expect(validation.checkPlayerOption(option)).toBeTruthy();
    }
  );

  test.each([["0"], [""], ["안녕하세요"], ["!!"], ["3"], ["123"]])(
    "validation.checkPlayerOption(&s) => 1, 2가 아닌 입력값은 false를 반환",
    (option) => {
      expect(validation.checkPlayerOption(option)).toBeFalsy();
    }
  );
});
