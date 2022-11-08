const Dispatcher = require('../src/Dispatcher');

describe('Dispatch class 테스트', () => {
  test('register 함수 및 dispatch 함수 작동 테스트', () => {
    const dispatcher = new Dispatcher();
    const result = [];

    dispatcher.register((action) => {
      result.push(action);
    });

    dispatcher.register((action) => {
      result.push(action + 1);
    });

    dispatcher.dispatch(1);

    expect(result).toEqual([1, 2]);
  });
});
