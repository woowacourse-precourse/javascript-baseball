const App = require("../src/App");
const { print, close, readLine, pickNumberInRange } = require("../src/Utils");


describe("counterPrint 테스트", () => {
  test('2스트라이크 0볼일때 "2스트라이크" 출력 확인', () => {
    const app = new App();
    const countPrinterMsg = jest.fn(() => print("2스트라이크"));
    let ball = 0;
    let strike = 2;
    countPrinterMsg();
    expect(countPrinterMsg).toHaveBeenCalled(app.countPrinter(ball, strike));
  });
});