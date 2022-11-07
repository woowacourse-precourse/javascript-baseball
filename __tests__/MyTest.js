const { isBall, isStrike } = require("../src/Referee");
const validateUserInput = require("../src/utils");
const User = require("../src/User");
const Computer = require("../src/Computer");

describe("Referee Test", () => {
  test("다른 자리에 있는 숫자의 수를 세야한다.", () => {
    const answer = [1, 2, 3];
    const input = [3, 5, 1];
    
    expect(
      isBall(answer, input)
    ).toEqual(2);
  });

  test("겹치는 수가 없는 경우 0을 반환한다.", () => {
    const answer = [1, 2, 3];
    const input = [4, 5, 6];
    
    expect(
      isBall(answer, input)
    ).toEqual(0);
  });

  test("같은 수가 같은 자리에 있으면 스트라이크", () => {
    const answer = [1, 2, 3];
    const input = [1, 5, 6];
    
    expect(
      isStrike(answer, input)
    ).toEqual(1);
  });
});

describe("utils Test", () => {
  test("입력값의 길이는 3이어야 한다.", () => {
    const input = [3, 5];
    
    expect(()=>{
      validateUserInput(input);
    }).toThrow();
  });

  test("입력값에는 중복값이 없어야한다.", () => {
    const input = [4, 1, 1];
    
    expect(()=>{
      validateUserInput(input);
    }).toThrow();
  });

  test("입력값의 각 자릿수는 1 ~ 9 사이의 자연수이다.", () => {
    const input = [0, 5, 6];
    
    expect(()=>{
      validateUserInput(input);
    }).toThrow();
  });

  test("입력값의 각 자릿수는 1 ~ 9 사이의 자연수이다.", () => {
    const input = ["a", 5, 6];
    
    expect(()=>{
      validateUserInput(input);
    }).toThrow();
  });
});

describe("Getter and Setter Test", () => {
  test("User", () => {
    const input = [1, 5, 6];

    const user = new User();
    user.numbers = input;

    expect(user.numbers).toEqual(input);
  });

  test("Computer", () => {
    const input = [1, 5, 6];

    const computer = new Computer();
    computer.numbers = input;

    expect(computer.numbers).toEqual(input);
  });
  
});
