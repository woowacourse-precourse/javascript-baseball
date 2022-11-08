const App = require("../src/App");
const CountPrinter = require("../src/CountPrinter");
const { print } = require("../src/Utils");


describe("counterPrint 테스트", () => {
  test('2스트라이크 0볼일때 "2스트라이크" 출력 확인', () => {
    const counterPrinter = new CountPrinter();
    const countPrinterMsg = jest.fn(() => print("2스트라이크"));
    let ball = 0;
    let strike = 2;
    countPrinterMsg();
    expect(countPrinterMsg).toHaveBeenCalled(counterPrinter.ofBaseball(ball, strike));
  });
  test('0스트라이크 0볼일때 "낫싱" 출력 확인', () => {
    const counterPrinter = new CountPrinter();
    const countPrinterMsg = jest.fn(() => print("낫싱"));
    let ball = 0;
    let strike = 0;
    countPrinterMsg();
    expect(countPrinterMsg).toHaveBeenCalled(counterPrinter.ofBaseball(ball, strike));
  });
  test('0스트라이크 2볼일때 "2볼" 출력 확인', () => {
    const counterPrinter = new CountPrinter();
    const countPrinterMsg = jest.fn(() => print("2볼"));
    let ball = 2;
    let strike = 0;
    countPrinterMsg();
    expect(countPrinterMsg).toHaveBeenCalled(counterPrinter.ofBaseball(ball, strike));
  });
  test('1스트라이크 1볼일때 "1스트라이크 1볼" 출력 확인', () => {
    const counterPrinter = new CountPrinter();
    const countPrinterMsg = jest.fn(() => print("잘못된 메세지"));
    let ball = 1;
    let strike = 1;
    countPrinterMsg();
    expect(countPrinterMsg).toHaveBeenCalled(counterPrinter.ofBaseball(ball, strike));
  });
});