const MissionUtils = require("@woowacourse/mission-utils");

describe("User로부터 입력받은 후 타당성 체크", () => {
  test("User로 부터 입력받기", (done) => {
    function callback() {
      MissionUtils.Console.readLine("숫자를 입력해주세요", (number) => {
        expect(number).toBe(number);
        done();
      });
    }
    callback();
  });

  test("number를 Array로 변환", () => {
    const num = 143;
    function numToArray() {
      return [...String(num)];
    }
    expect(numToArray()).toEqual(["1", "4", "3"]);
  });

  test("User에게 입력받은 숫자의 중복검사", () => {
    let checkArr = [];
    const userNum = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8];
    for (let i = 0; i < userNum.length; i++) {
      if (checkArr.includes(userNum[i]) === false) {
        checkArr.push(userNum[i]);
      }
    }

    const deleteDuplicatesCheckArr = new Set(checkArr).size;

    expect(deleteDuplicatesCheckArr).toBe(checkArr.length);
  });

  test("User에게 입력받은 숫자가 1~9 사이인지 검사", () => {
    function checkNumRange(userNum) {
      if (/^[1-9]*$/g.test(userNum.join("")) === false) {
        return false;
      }
      expect(checkNumRange("12340")).toEqual(false);
      expect(checkNumRange("1234@")).toEqual(false);
      expect(checkNumRange("-123")).toEqual(false);
    }
  });

  test("User에게 입력받은 숫자가 3개인지 검사", () => {
    function checkLength(userNum) {
      if (userNum.length === 3) {
        return true;
      }
    }
    expect(checkLength(["1", "2", "3"])).toEqual(true);
  });
  test("user가 공백을 입력했는지 검사", () => {
    function checkBlank(userNum) {
      if (userNum.length === 0) {
        return true;
      }
    }
    expect(checkBlank([])).toEqual(true);
  });

  test("false 시 에러문구 보내기 검사", () => {
    function errorCatch(boolean) {
      if (boolean === false) {
        throw new Error("Invalid");
      }
    }
    expect(() => errorCatch(false)).toThrow("Invalid");
  });
});
