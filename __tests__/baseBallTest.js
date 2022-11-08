const BaseBall = require('../src/baseBall');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Application Unit Test', () => {
  describe('createRandomNumDigitArray method test', () => {
    test("it's length must be 3", () => {
      const randomNumDigitArray = BaseBall.createRandomNumDigitArray();
      expect(randomNumDigitArray.length).toEqual(3);
    });

    test('it must be not include same digit', () => {
      const randomNumDigitArray = BaseBall.createRandomNumDigitArray();
      randomNumDigitArray.forEach((item) => {
        let count = randomNumDigitArray.filter(
          (element) => item === element
        ).length;
        expect(count).toEqual(1);
      });
    });
  });

  describe('checkUserInput method test', () => {
    test('correct num', () => {
      const num = 123;
      expect(() => {
        BaseBall.checkUserInput(num);
      }).not.toThrow();
    });
    test('it must be throw error, if include not digit', () => {
      const num = '5a6';
      expect(() => {
        BaseBall.checkUserInput(num);
      }).toThrow();
    });
    test('it must be throw error, if include duplicate digit', () => {
      const num = '121';
      expect(() => {
        BaseBall.checkUserInput(num);
      }).toThrow();
    });
    test("it must be throw error, if it's length not equal 3", () => {
      const num = 1124;
      expect(() => {
        BaseBall.checkUserInput(num);
      }).toThrow();
    });
  });

  describe('getBallAndStrike method test', () => {
    test('it must be 3 strike ([1,2,3], [1,2,3])', () => {
      const [strikeCount, ballCount] = BaseBall.getBallAndStrike(
        [1, 2, 3],
        [1, 2, 3]
      );
      expect(strikeCount).toEqual(3);
      expect(ballCount).toEqual(0);
    });

    test('it must be 3 ball ([1,2,3], [3,1,2])', () => {
      const [strikeCount, ballCount] = BaseBall.getBallAndStrike(
        [1, 2, 3],
        [3, 1, 2]
      );
      expect(strikeCount).toEqual(0);
      expect(ballCount).toEqual(3);
    });

    test('it must be 1 ball, 1 strike ([3,1,4], [3,4,2])', () => {
      const [strikeCount, ballCount] = BaseBall.getBallAndStrike(
        [3, 1, 4],
        [3, 4, 2]
      );
      expect(strikeCount).toEqual(1);
      expect(ballCount).toEqual(1);
    });

    test('it must be 0 ball, 0 strike ([1,2,3], [4,5,6])', () => {
      const [strikeCount, ballCount] = BaseBall.getBallAndStrike(
        [1, 2, 3],
        [4, 5, 6]
      );
      expect(strikeCount).toEqual(0);
      expect(ballCount).toEqual(0);
    });
  });

  describe('gameResult method test', () => {
    test('return correct random number and print ball, strike count', () => {
      const strikeCountArray = [1, 3, 0, 0];
      const ballCountArray = [1, 0, 3, 0];
      const result = [false, true, false, false];
      const logSpy = getLogSpy();

      const messages = [
        '1볼 1스트라이크',
        '3스트라이크',
        '3볼 ',
        '3스트라이크',
        '낫싱',
      ];

      for (let i = 0; i < strikeCountArray.length; i++) {
        expect(
          BaseBall.gameResult(strikeCountArray[i], ballCountArray[i])
        ).toBe(result[i]);
      }

      messages.forEach((output, idx) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });

  describe('getIsRestart method test', () => {
    test('correct input (1: restart, 2: finish)', () => {
      const inputList = [1, 2];
      const isRestartList = [true, false];

      for (let i = 0; i < inputList.length; i++) {
        expect(BaseBall.getIsRestart(inputList[i])).toBe(isRestartList[i]);
      }
    });
    test('invalid input ', () => {
      const num = 3;
      expect(() => {
        BaseBall.getIsRestart(num);
      }).toThrow();
    });
  });
});
