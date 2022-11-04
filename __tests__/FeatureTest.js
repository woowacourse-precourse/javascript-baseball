const Game = require('../src/components/Game');

describe('사용자 입력 값 검증', () => {
  test('예외 테스트', () => {
    const userInputNumbers = ['222', '010', '1234', 'a23', '1v3', '131', '120', '901'];
    const game = new Game();

    userInputNumbers.forEach((input) => {
      expect(() => {
        game.validateUserInputNumber(input);
      }).toThrow();
    });
  });
});
