const App = require("../src/App");

describe("구현한 기능 유닛 테스트", () => {
  const app = new App();

  describe("사용자가 맞춰야 하는 3자리 임의의 수 테스트", () => {
    const randomNums = app.getRandomNums();

    test("3개의 임의의 수를 갖는 배열이다.", () => {
      const isArray = Array.isArray(randomNums);

      expect(isArray).toEqual(true);
      expect(randomNums.length).toEqual(3);
    });

    test("3개의 임의의 수는 중복되지 않는다.", () => {
      const isUnique = new Set(randomNums).size === 3;

      expect(isUnique).toEqual(true);
    });
  });

  describe("사용자가 입력한 값에 대한 유효성 테스트", () => {
    test("입력값에 숫자가 아닌 값이 포함되면 예외 처리한다.", () => {
      const result = () => app.checkUserInput("12b");

      expect(result).toThrow();
    });

    test("입력값이 3자릿수가 아니면 예외 처리한다", () => {
      const result = () => app.checkUserInput("1234");

      expect(result).toThrow();
    });

    test("입력값에 중복된 숫자가 있으면 예외처리한다.", () => {
      const result = () => app.checkUserInput("232");

      expect(result).toThrow();
    });

    test("입력값에 0이 포함되면 예외처리한다.", () => {
      const result = () => app.checkUserInput("230");

      expect(result).toThrow();
    });
  });
});
