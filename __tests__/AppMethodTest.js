const App = require('../src/App');

describe('Application Unit Test', () => {
  describe('createRandomNumDigitArray method test', () => {
    test("it's length must be 3", () => {
      const app = new App();
      const randomNumDigitArray = app.createRandomNumDigitArray();
      expect(randomNumDigitArray.length).toEqual(3);
    });

    test('it must be not include same digit', () => {
      const app = new App();
      const randomNumDigitArray = app.createRandomNumDigitArray();
      randomNumDigitArray.forEach((item) => {
        let count = randomNumDigitArray.filter(
          (element) => item === element
        ).length;
        expect(count).toEqual(1);
      });
    });
  });

  describe('checkUserInput method test', () => {
    test('correct num', () => {
      const num = 123;
      expect(() => {
        const app = new App();
        app.checkUserInput(num);
      }).not.toThrow();
    });
    test('it must be throw error, if include not digit', () => {
      const num = '5a6';
      expect(() => {
        const app = new App();
        app.checkUserInput(num);
      }).toThrow();
    });
    test('it must be throw error, if include duplicate digit', () => {
      const num = '121';
      expect(() => {
        const app = new App();
        app.checkUserInput(num);
      }).toThrow();
    });
    test("it must be throw error, if it's length not equal 3", () => {
      const num = 1124;
      expect(() => {
        const app = new App();
        app.checkUserInput(num);
      }).toThrow();
    });
  });
});
