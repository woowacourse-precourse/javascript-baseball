const App = require("../src/App");
const app = new App();

test(`스트라이크와 볼 개수에 따라 결과 출력`, () => {
    const app = new App();
    const testInput = [
      [2, 0],
      [0, 1],
      [2, 1],
      [0, 0],
    ];
    const result = ['2스트라이크', '1볼', '1볼 2스트라이크', '낫싱'];

    testInput.forEach(([strikeCount, ballCount], idx) => {
      const methodResult = app.getGameResult(strikeCount, ballCount);
      expect(methodResult).toBe(result[idx]);
    });
  });