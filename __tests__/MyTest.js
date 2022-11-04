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

test("사용자 숫자 상대방 숫자 비교", () => {
  const app = new App();
  const resultText = app.compare([1, 2, 3], [5, 6, 4]);
  expect(resultText).toEqual("낫싱");
});
