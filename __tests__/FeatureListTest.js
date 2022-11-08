const App = require('../src/App');
const Game = require('../src/Game');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 목록 테스트', () => {
  test('게임 시작 문구 출력', () => {
    const logSpy = getLogSpy();

    const game = new Game();
    game.init();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('컴퓨터의 3자리 수 생성', () => {
    const game = new Game();
    const numberArr = game.generateThreeDigitNumber();
    const numberStr = numberArr.join('');
    const numberSet = new Set(numberArr);

    expect(/^[1-9]{3}$/.test(numberStr)).toBe(true);
    expect(numberSet.size).toEqual(3);
  });

  test('잘못된 값을 입력한 경우 에러처리', () => {
    const game = new Game();

    guesses = [
      // 3자리 수가 아닐 경우
      '1234',
      '12',
      '-12',
      '0.1',
      // 중복된 수가 있는 경우
      '121',
      // 0을 포함할 경우
      '012',
      // 숫자가 아닐 경우
      'abc',
      '일이삼',
      '!@#',
    ];

    guesses.forEach((guess) => {
      expect(() => {
        game.isValidGuess(guess);
      }).toThrow(
        '각 자리가 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력하세요.'
      );
    });
  });

  test('볼, 스트라이크 개수 구하기', () => {
    const game = new Game();
    const pitches = [
      [
        // guess
        [1, 2, 3],
        // answer
        [4, 2, 5],
        // [ballShouldBe, strikeShouldbe]
        [0, 1],
      ],
      [
        [4, 5, 6],
        [4, 2, 5],
        [1, 1],
      ],
      [
        [7, 8, 9],
        [4, 2, 5],
        [0, 0],
      ],
      [
        [4, 2, 5],
        [4, 2, 5],
        [0, 3],
      ],
    ];

    pitches.map(([guess, answer, [ballShouldBe, strikeShouldbe]]) => {
      const { ball, strike } = game.judgeBallStrike(guess, answer);
      expect([ball, strike]).toEqual([ballShouldBe, strikeShouldbe]);
    });
  });

  test('입력한 숫자에 대한 결과 출력', () => {
    const game = new Game();
    const logSpy = getLogSpy();

    const scores = [
      // [[ball 개수, strike 개수], 출력문]
      [[0, 1], '1스트라이크'],
      [[1, 1], '1볼 1스트라이크'],
      [[0, 0], '낫싱'],
      [[0, 3], '3스트라이크'],
    ];

    scores.map(([[ball, strike], outputStr]) => {
      game.printHint(ball, strike);
      expect(logSpy).toHaveBeenCalledWith(outputStr);
    });
  });
});
