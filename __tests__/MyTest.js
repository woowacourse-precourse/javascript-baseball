const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

test("1 = 1", () => {
  expect(1).toBe(1);
});
test("상대방 배열 생성", () => {
  const app = new App();
  const ComputerArr = app.makeComputerArr();
  expect(ComputerArr).toHaveLength(3);
});

test("입력값 제한 사항 체크", () => {
  const app = new App();
  const startText = app.inputCheck("123");
  expect(startText).toEqual([1, 2, 3]);
});
