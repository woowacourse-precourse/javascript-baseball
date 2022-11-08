const UserInputValid = require("../src/input/UserInputValidation");

describe("UserInputValid Class Test Operation", () => {
  let userInput;
  const numberExample = "123";

  beforeEach(() => {
    userInput = new UserInputValid(numberExample);
  });

  test("checkValidLength 메소드 비정상 입력 테스트", () => {
    const incorrectInputCases = [[1, 2, 3, 4], [1, 2], [1], []];

    incorrectInputCases.forEach((value) => {
      expect(userInput.checkValidLength(value)).toBeFalsy();
    });
  });
  test("checkValidLength 메소드 정상 입력 테스트", () => {
    const correctInputCases = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    correctInputCases.forEach((value) => {
      expect(userInput.checkValidLength(value)).toBeTruthy();
    });
  });

  test("checkDuplicate 메소드 정상 입력 테스트", () => {
    const notDuplicateCases = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 1, 5],
      [2, 8, 9],
    ];

    notDuplicateCases.forEach((value) => {
      expect(userInput.checkDuplicate(value)).toBeTruthy();
    });
  });
  test("checkDuplicate 메소드 비정상 입력 테스트", () => {
    const isDuplicateCases = [
      [1, 2, 2],
      [1, 1, 1],
      [7, 5, 7],
      [3, 3, 3],
    ];

    isDuplicateCases.forEach((value) => {
      expect(userInput.checkDuplicate(value)).toBeFalsy();
    });
  });

  test("checkInputType 메소드 정상 입력 테스트", () => {
    const correctTypeCases = [
      [1, 2, 3],
      [7, 8, 9],
      [3, 1, 2],
    ];

    correctTypeCases.forEach((value) => {
      expect(userInput.checkInputType(value)).toBeTruthy();
    });
  });

  test("checkInputType 메소드 비정상 입력 테스트", () => {
    const incorrectTypeCases = [
      [1, 2, "a"],
      [4, 5, "ㅎ"],
      [7, 8, "#"],
    ];

    incorrectTypeCases.forEach((value) => {
      expect(userInput.checkInputType(value)).toBeFalsy();
    });
  });

  test("checkValidScope 메소드 정상 입력 테스트", () => {
    const correctOriginalInput = [1, 2, 3];
    const [correctHundreds, correctTens, correctUnits] = [
      ...correctOriginalInput,
    ];

    [correctHundreds, correctTens, correctUnits].forEach((value) => {
      expect(userInput.checkValidScope(value)).toBeTruthy();
    });
  });
  test("checkValidScope 메소드 비정상 입력 테스트", () => {
    const incorrectOriginalInput = [0, 0, 0];
    const [incorrectHundreds, incorrectTens, incorrectUnits] = [
      ...incorrectOriginalInput,
    ];

    [incorrectHundreds, incorrectTens, incorrectUnits].forEach((value) => {
      expect(userInput.checkValidScope(value)).toBeFalsy();
    });
  });

  test("alertInvalidInput 메소드 입력값에 따른 throw 테스트", () => {
    const infomationArray = [
      "NaN",
      "inValidLength",
      "duplicate",
      "inValidScope",
    ];

    expect(() =>
      infomationArray.forEach((value) => {
        userInput.alertInvalidInput(value);
      })
    ).toThrow();
  });
});
