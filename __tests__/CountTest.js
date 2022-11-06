const App = require('../src/App');

describe('볼-스트라이크 결과 표시', () => {
  test('경우 1', () => {
    const input = [1, 2, 3];
    const answer = [1, 2, 3];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('0 3');
  });

  test('경우 2', () => {
    const input = [1, 2, 3];
    const answer = [2, 3, 1];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('3 0');
  });

  test('경우 3', () => {
    const input = [7, 4, 8];
    const answer = [1, 2, 3];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('0 0');
  });

  test('경우 4', () => {
    const input = [7, 4, 8];
    const answer = [2, 1, 8];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('0 1');
  });

  test('경우 5', () => {
    const input = [7, 4, 8];
    const answer = [7, 4, 6];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('0 2');
  });

  test('경우 6', () => {
    const input = [7, 4, 8];
    const answer = [7, 8, 4];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('2 1');
  });

  test('경우 7', () => {
    const input = [7, 4, 8];
    const answer = [1, 2, 8];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('0 1');
  });

  test('경우 8', () => {
    const input = [7, 4, 8];
    const answer = [8, 2, 4];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('2 0');
  });

  test('경우 9', () => {
    const input = [7, 4, 8];
    const answer = [4, 6, 8];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('1 1');
  });

  test('경우 10', () => {
    const input = [7, 4, 8];
    const answer = [3, 7, 6];
    const app = new App();

    app.input = input;
    app.answer = answer;
    app.countResult();

    expect(`${app.ballCount} ${app.strikeCount}`).toEqual('1 0');
  });
});