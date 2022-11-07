const BaseBallGame = require('../src/BaseBallGame.js');

describe("숫자 야구 게임 메서드 테스트", () => {
  const baseBallGame = new BaseBallGame();

  test('배열에 중복된 요소가 있는지 체크', () => {
    const { isDuplicated } = baseBallGame;
    const duplicated = ['a','b','a'];
    const withoutDuplicated = ['a', 'b'];

    expect(isDuplicated(duplicated)).toBeTruthy();
    expect(isDuplicated(withoutDuplicated)).toBeFalsy();
    expect(isDuplicated([])).toBeFalsy();
  });

  test('유저의 답변 유효성 검사', () => {
    const { validation } = baseBallGame;
    const bindValidation = validation.bind(baseBallGame);

    expect(bindValidation([1,2,3]))
      .toBeTruthy();

    expect(() => bindValidation([1,2,3,4]))
      .toThrow('입력한 숫자의 갯수가 3개가 아닙니다.');

    expect(() => bindValidation([1,10,14]))
      .toThrow('1부터 9까지의 숫자만 입력 가능합니다.');
    
    expect(() => bindValidation([1,6,6]))
      .toThrow('입력 숫자가 중복되었습니다.');
  });
  
  test('게임 규칙에 의한 정답 체크', () => {
    const { checkUserAnswer } = baseBallGame;
    let gameAnswer = [1,2,3];

    let userAnswer = [1,2,3];
    expect(checkUserAnswer(gameAnswer, userAnswer)).toEqual(
      {
        victory: true,
        count: { 스트라이크: 3, 볼: 0, 낫싱: 0}
      }
    );

    userAnswer = [4,5,6];
    expect(checkUserAnswer(gameAnswer, userAnswer)).toEqual(
      {
        victory: false,
        count: { 스트라이크: 0, 볼: 0, 낫싱: 3}
      }
    );
    
    userAnswer = [3,1,2];
    expect(checkUserAnswer(gameAnswer, userAnswer)).toEqual(
      {
        victory: false,
        count: { 스트라이크: 0, 볼: 3, 낫싱: 0}
      }
    );

    userAnswer = [1,3,9];
    expect(checkUserAnswer(gameAnswer, userAnswer)).toEqual(
      {
        victory: false,
        count: { 스트라이크: 1, 볼: 1, 낫싱: 1}
      }
    );
  });
})