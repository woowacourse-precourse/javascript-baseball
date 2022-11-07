const { isRightAnswer, isNothing, calculateCount } = require("../src/modules/playGameLoop");

describe("컴퓨터의 숫자와 유저의 입력값을 비교하는 테스트", () => {
  const randomNumber = [3, 6, 4];
  test("유저가 정답을 입력하는 경우", () => {
    const answerInput = [3, 6, 4];
    const result1 = isRightAnswer(randomNumber, answerInput);
    const result2 = isNothing(randomNumber, answerInput);
    
    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });
  
  test("유저가 낫싱을 입력하는 경우", () => {
    const nothingInput = [1, 9, 5];
    const result1 = isRightAnswer(randomNumber, nothingInput);
    const result2 = isNothing(randomNumber, nothingInput);

    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
  });

  test("유저가 정답이나 낫싱이 아닌 값을 입력하는 경우", () => {
    const input = [3, 4, 6];
    const result1 = isRightAnswer(randomNumber, input);
    const result2 = isNothing(randomNumber, input);
    const result3 = calculateCount(randomNumber, input);

    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual([2, 1]);
  });
});
