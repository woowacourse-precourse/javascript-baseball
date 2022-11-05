const App = require("../src/App.js");
const MissionUtils = require("@woowacourse/mission-utils");
const app = new App();


describe("테스트", () => {
  test(`test of number`, () => {
    const correct_answer = app.createRandomNum().length
    const ramdom_num_length = 3;
    expect(correct_answer).toBe(ramdom_num_length);
  });
})

