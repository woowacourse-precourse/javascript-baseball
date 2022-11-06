const App = require("../src/App");

describe("기능테스트", () => {
  test("setBaseLine", () => {
    const app = new App();
    const before = app.getBaseLine();
    expect(before).toEqual(null);
    app.setBaseLine();
    const after = app.getBaseLine()
    expect(after.length).toEqual(3);
  });
})