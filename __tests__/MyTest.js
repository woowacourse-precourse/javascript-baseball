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

test("게임 시작 문구 출력", () => {
  const app = new App();
  const startText = app.play();
  expect(startText).toBe("숫자 야구 게임을 시작합니다.");
});
