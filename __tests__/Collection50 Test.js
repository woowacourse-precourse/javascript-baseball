const { ErrorCheck } = require('../src/components/ErrorCheck');
const { Game } = require('../src/components/Game');

describe('에러 검사 TEST', () => {
  test('isNothing Function Check', () => {
    const inputA = 0;
    const inputB = 0;

    expect(ErrorCheck.isNothing(inputA, inputB)).toEqual(true);
  });

  test('getStrikeBallCount Function Check', () => {
    const randomNumber = [2, 5, 6];
    const guessNumber = '235';

    expect(Game.getStrikeBallCount(randomNumber, guessNumber)).toEqual([1, 1]);
  });

  test('getStrikeBallMessage Function Check', () => {
    const [strikeCount, ballCount] = [2, 1];

    expect(Game.getStrikeBallMessage(strikeCount, ballCount)).toEqual(
      '1볼 2스트라이크'
    );
  });

  test('guessError Function Check', () => {
    const exampleInput = '12b';

    expect(() => {
      ErrorCheck.guessError(exampleInput);
    }).toThrow();
  });

  test('replayError', () => {
    const exampleInput = '12';

    expect(() => {
      ErrorCheck.replayError(exampleInput);
    }).toThrow();
  });
});
