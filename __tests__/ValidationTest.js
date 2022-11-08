const App = require("../src/App");

// checkUserNumberValid 가 public일 때 가능한 테스트
describe("숫자 유효성 검사", () => {
  test("예외 테스트", () => {
    const handleValidationFunction = jest.spyOn(App.prototype, 'checkUserNumberValid');
    const getNumberValidation = handleValidationFunction.mockImplementationOnce();
    const userNumbers = [
      '466',
      '999',
      '100',
      '-34',
      '0.1',
      '12345',
      '0',
      '',
      'abc',
      '3566',
      '67%'
    ];

    const app = new App();

    userNumbers.forEach((number) => {
      expect(() => {
        getNumberValidation(number);
      }).toThrow();
    });
  });
});
