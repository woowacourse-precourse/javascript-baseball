const App = require("../src/App");
const gameTool = require("../src/GameTool");

describe("gameTool 테스트", () => {
  test("generateRandomNumber 함수, 랜덤으로 겹치지 않는 수 3개 생성", () => {
    const set = new Set();
    const randomNumbers = gameTool.generateRandomNumber();

    randomNumbers.forEach((number) => {
      expect(number.toString()).toMatch(/[1-9]/);
      set.add(number);
    });

    expect(set.size).toBe(3);
  });
});


