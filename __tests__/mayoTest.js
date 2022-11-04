const App = require("../src/App");
// 숫자가 아니라 문자를 입력한 경우
test("숫자가 아닌 값을 입력한 경우", () => {
  const input = "1,2";
  const result = input.split(",");

  expect(result).toEqual("1,2");
});
