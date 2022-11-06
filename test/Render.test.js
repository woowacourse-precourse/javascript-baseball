const MissionUtils = require("@woowacourse/mission-utils");
describe("게임 결과에 따라 유저에게 입력받기", () => {
  test("User로 부터 1과 2중 하나의 입력을 받는 함수 테스트", (done) => {
    function callback() {
      MissionUtils.Console.readLine("1은 재시작 2는 종료입니다", (number) => {
        expect(number).toBe(number);
        done();
      });
    }
    callback();
  });
  test("number를 각 자릿수마다 string으로 변경 후 배열로 묶기 ", () => {
    function numToArr(num) {
      return [...String(num)];
    }
    expect(numToArr(123)).toEqual(["1", "2", "3"]);
  });

  test("유저가 1과 2의 숫자만을 입력했는지 확인", () => {
    function checkNumRange(userNum) {
      if (/^[1-2]*$/g.test(userNum.join("")) === false) {
        return false;
      } else if (/^[1-2]*$/g.test(userNum.join("")) === true) {
        return true;
      }
    }
    expect(checkNumRange(["1", "2", "3"])).toEqual(false);
    expect(checkNumRange(["1", "2"])).toEqual(true);
    expect(checkNumRange(["@"])).toEqual(false);
  });

  test("유저의 입력값이 한 개 인지 확인 ", () => {
    function checkNumLength(userNum) {
      if (userNum.length !== 1) {
        return false;
      } else if (userNum.length === 1) {
        return true;
      }
    }
    expect(checkNumLength(["1", "2"])).toEqual(false);
    expect(checkNumLength(["1"])).toEqual(true);
  });

  test("false 시 에러문구 보내기 검사", () => {
    function errorCatch(boolean) {
      if (boolean === false) {
        throw new Error("Invalid");
      }
    }
    expect(() => errorCatch(false)).toThrow("Invalid");
  });

  test("1,2의 선택에 따라 재시작/종료 요청", () => {
    function replayOrEnd(userChoice) {
      if (userChoice === 1) {
        return "재시작함수";
      }
      if (userChoice === 2) {
        return "종료함수";
      }
    }

    expect(replayOrEnd(1)).toBe("재시작함수");
    expect(replayOrEnd(2)).toBe("종료함수");
  });
});
