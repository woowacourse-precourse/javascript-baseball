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
});
