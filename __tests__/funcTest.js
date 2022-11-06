const App = require("../src/App");

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
    const testData = app.inputToTestData("123")
    expect(testData[0]).toEqual(1);
    expect(testData[1]).toEqual(2);
    expect(testData[2]).toEqual(3);
    expect(() => {
      const app = new App();
      app.inputToTestData("0")
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("12")
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("111")
    }).toThrow();
  });
});
