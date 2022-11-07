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
})