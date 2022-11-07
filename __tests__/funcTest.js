const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("기능테스트", () => {
  test("setBaseLine", () => {
    const app = new App();
    const before = app.getBaseLine();
    let after = null;

    expect(before).toEqual(null);
    app.setBaseLine();

    after = app.getBaseLine();
    expect(after.length).toEqual(3);
  });

  test("inputTestData", () => {
    const app = new App();
    const testData = app.inputToTestData("123");

    expect(testData[0]).toEqual(1);
    expect(testData[1]).toEqual(2);
    expect(testData[2]).toEqual(3);
    expect(() => {
      const app = new App();
      app.inputToTestData("0");
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("12");
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("111");
    }).toThrow();
  });

  test("compare", () => {
    const app = new App();
    app.setBaseLine();
    const answer = app.compare([1, 2, 3]);
    expect(typeof answer).toEqual("boolean");
  });

  test("continueAnswer", () => {
    const app = new App();
    const spySetBaseLine = jest.spyOn(app, "setBaseLine");
    const spyProgressFn = jest.spyOn(app, "progress");
    app.continueAnswer("1");
    expect(spySetBaseLine).toBeCalled();
    expect(spyProgressFn).toBeCalled();
  });

  test("continueAnswerDefault", () => {
    expect(() => {
      const app = new App();
      app.continueAnswer("3");
    }).toThrow();
  });

  test("continueQuestion", () => {
    const app = new App();
    const spyReadLine = jest.spyOn(MissionUtils.Console, "readLine");
    app.continueQuestion("1");
    expect(spyReadLine).toBeCalled();
  });

  test("nextProgressTrue", () => {
    const app = new App();
    const spyContinueQuestion = jest.spyOn(app, "continueQuestion");
    app.nextProgress(true);
    expect(spyContinueQuestion).toBeCalled();
  });

  test("nextProgressFalse", () => {
    const app = new App();
    const spyProgress = jest.spyOn(app, "progress");
    app.nextProgress(false);
    expect(spyProgress).toBeCalled();
  });

  test("progress", () => {
    const app = new App();
    const spyReadLine = jest.spyOn(MissionUtils.Console, "readLine");
    app.progress();
    expect(spyReadLine).toBeCalled();
  });
});
