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

test("", () => {
  expect();
});
