const MainGameSystem = require("../src/components/MainGameSystem");

describe("플레이어의 숫자를 받아서 알맞은 힌트 제공", () => {
  let mainGameSystem;
  beforeEach(() => {
    mainGameSystem = new MainGameSystem();
  });

  describe("mainGameSystem", () => {
    describe("checkPlayerRandomNum - 예외상황", () => {
      it("checkPlayerRandomNum", () => {
        expect(mainGameSystem.checkPlayerRandomNum("312")).toBe("312");
      });

      it("throw 입력값이 3자리가 아닙니다", () => {
        expect(() => mainGameSystem.checkPlayerRandomNum("3251")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("22221121")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("1")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum(0)).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum(undefined)).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum(null)).toThrow();
      });

      it("throw 숫자가아닌 값이 포함되어있습니다", () => {
        expect(() => mainGameSystem.checkPlayerRandomNum("콩국수")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("라9면")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("서울3")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("대+전")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("#$%")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum('7"3')).toThrow();
      });

      it("throw -, + 등 불필요한 값이 존재합니다", () => {
        expect(() => mainGameSystem.checkPlayerRandomNum("-43")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("23+")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("+43")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("*62")).toThrow();
      });

      it("throw 중복되는 숫자가 존재합니다", () => {
        expect(() => mainGameSystem.checkPlayerRandomNum("332")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("777")).toThrow();
        expect(() => mainGameSystem.checkPlayerRandomNum("688")).toThrow();
      });

      describe(" isDuplicate 함수 확인", () => {
        it("중복없음 - false", () => {
          expect(mainGameSystem.isDuplicate("321")).toBe(false);
        });

        it("중복존재 - true", () => {
          expect(mainGameSystem.isDuplicate("221")).toBe(true);
        });
      });
    });
  });
});
