const UserNumber = require("../src/UserNumber");
const userNumber = new UserNumber();

describe("사용자의 입력값이 조건에 맞지 않을 시", () => {
    test("사용자 입력값이 3자리수가 아닐경우", () => {
      const answer = "1234";
      
      expect(() => {
        userNumber.threeDigitsError(answer);
      }).toThrow("Error (숫자의 길이가 3이 아닙니다.)");
    });

    test("사용자 입력값에 0이 포함될 경우", () => {
      const answer = "120";
      
      expect(() => {
        userNumber.includeZeroError(answer);
      }).toThrow("Error (숫자가 0을 포함하고 있습니다)");
    });

    test("사용자 입력값이 숫자형식이 아닐 경우", () => {
      const answer = "asd!";
      
      expect(() => {
        userNumber.isNotNumberError(answer);
      }).toThrow("Error (숫자 형식이 아닙니다.)");
    });

    test("사용자 입력값이 중복될 경우", () => {
      const answer = "111";
      
      expect(() => {
        userNumber.overlapNumberError(answer);
      }).toThrow("Error (중복된 숫자가 있습니다.)");
    });
  });
    




    