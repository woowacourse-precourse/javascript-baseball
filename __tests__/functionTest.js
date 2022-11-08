const App = require("../src/App");

//validateUserNumbers
describe("user number 유효성 검사", () => {
  test("user가 입력한 수의 길이가 3이 아니면 오류", () => {
    const app = new App();
    const USER_STRING = "1234";

    expect(() => app.validateUserNumbers(USER_STRING)).toThrow();
  });

  test("user가 입력한 수에 0이 들어있으면 오류", () => {
    const app = new App();
    const USER_STRING = "104";

    expect(() => app.validateUserNumbers(USER_STRING)).toThrow();
  });
});

//makeRandom
describe("random 값 배열 생성", () => {
  test("random값의 길이가 3이어야 함.", () => {
    const app = new App();
    const randomArray = app.makeRandom();

    expect(randomArray.length).toEqual(3);
  });

  test("random 배열의 값은 1부터 9사이", () => {
    const app = new App();
    const randomArray = app.makeRandom();

    const result = randomArray.every((number)=> number > 0 && number < 10);
    expect(result).toBe(true);
  });

  test("random 배열의 값은 다 다른 수", () => {
    const app = new App();
    const randomArray = app.makeRandom();

    const result = randomArray.every((number,index)=> randomArray.indexOf(number) === index);
    expect(result).toBe(true);
  });
});

// countStrikeAndBall
describe("Strike, Ball 개수 세기", () => {
  test("Strike, Ball 개수 세기", () => {
    const app = new App();

    const inputNumber = [1,5,8];
    const randomNumber = [8,5,3];
    const result = app.countStrikeAndBall(inputNumber, randomNumber);

    expect(result).toEqual({strike : 1, ball:1});
  });
});