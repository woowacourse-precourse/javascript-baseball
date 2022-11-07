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
});
