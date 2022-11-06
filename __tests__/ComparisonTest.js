const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

describe("숫자 값을 비교하기", () => {
  test("숫자가 다를 경우 false를 반환", () => {
    const app = new App();

    const answer = 1;
    const input = 2;

    const result = app.isSameNumber(answer, input);
    expect(result).toBe(false);
  });
  test("숫자가 같은 경우 true를 반환", () => {
    const app = new App();

    const answer = 1;
    const input = 1;

    const result = app.isSameNumber(answer, input);
    expect(result).toBe(true);
  });
  test("인자 간 비교를 통해서 strike와 ball을 반환", () => {
    const app = new App();
    const answers = [1, 2, 3];

    let inputs = [1, 3, 2];
    const result = app.compareNumbers(answers, inputs);
    expect(result).toEqual({ strike: 1, ball: 2 });
  });
});

describe("예외 처리 테스트", () => {
  test("사용자가 숫자가 아닌 값을 입력한 경우", () => {
    const answer = ["abc"];
    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자가 아닙니다.");
  });
  test("사용자가 범위를 초과한 입력을 한 경우", () => {
    const answer = ["12345"];
    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("세자리의 수를 입력해주세요.");
  });
  test("사용자가 같은 값을 가진 수를 입력했다면", () => {
    const answer = ["111"];
    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("반복되는 숫자가 있습니다.");
  });
});
