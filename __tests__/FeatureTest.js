const CalculateGame = require('../src/components/CalculateGame');
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

describe('사용자 입력 값이랑 컴퓨터 수 비교', () => {
  test('3스트라이크', () => {
    const gameCalculator = new CalculateGame('123', '123')

    expect(gameCalculator.getResult()).toEqual('3스트라이크');
  });

  test('1볼 1스트라이크', () => {
    const gameCalculator = new CalculateGame('568', '583')

    expect(gameCalculator.getResult()).toEqual('1볼 1스트라이크');
  });

  test('2스트라이크', () => {
    const gameCalculator = new CalculateGame('987', '187')

    expect(gameCalculator.getResult()).toEqual('2스트라이크');
  });

  test('낫싱', () => {
    const gameCalculator = new CalculateGame('179', '436')

    expect(gameCalculator.getResult()).toEqual('낫싱');
  });
});
