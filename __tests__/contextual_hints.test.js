const ContextualHints = require('../src/components/material/ContextualHints');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('contextualHint 확인', () => {
  const logSpy = getLogSpy();
  let contextualHints;
  beforeEach(() => {
    contextualHints = new ContextualHints([3, 2, 4], '345');
  });

  describe('constructor 확인', () => {
    it('computerNum = [3,2,4], playerNum = 345, NumOfSamePosition === 1', () => {
      expect(contextualHints.computerNum).toStrictEqual([3, 2, 4]);
      expect(contextualHints.playerNum).toStrictEqual('345');
      expect(contextualHints.NumOfSamePosition).toBe(1);
    });

    it('NO_STRIKE = 0 / this.ONE_STRIKE = 1 /this.TWO_STRIKE = 2 /this.THREE_STRIKE = 3', () => {
      expect(contextualHints.NO_STRIKE).toBe(0);
      expect(contextualHints.ONE_STRIKE).toBe(1);
      expect(contextualHints.TWO_STRIKE).toBe(2);
      expect(contextualHints.THREE_STRIKE).toBe(3);
    });

    it('this.NO_BALL = 0, ONE_BALL = 1, this.TWO_BAll = 2, THREE_BALL = 3', () => {
      expect(contextualHints.NO_BALL).toBe(0);
      expect(contextualHints.ONE_BALL).toBe(1);
      expect(contextualHints.TWO_BAll).toBe(2);
      expect(contextualHints.THREE_BALL).toBe(3);
    });
  });

  describe(' HowMnayEqualNum 함수 확인 ( 0스트라이크, 1스트라이크 때만 사용)', () => {
    it('1스트라이크 1볼 스트라이크 포함 같은 숫자 2개(1스트라이크 일때만 추후 결과값 -1)', () => {
      expect(contextualHints.HowManyEqualNum()).toBe(2);
    });

    it('3볼이기에 위치는 다르지만 같은 숫자 3개', () => {
      contextualHints = new ContextualHints([7, 2, 6], '672');
      expect(contextualHints.HowManyEqualNum()).toBe(3);
    });
  });

  describe('getContextualHints 함수 확인 ', () => {
    it('낫싱', () => {
      contextualHints = new ContextualHints([7, 8, 1], '542');
      contextualHints.getContextualHints();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
    });

    it('낫싱', () => {
      contextualHints = new ContextualHints([7, 8, 1], '542');
      contextualHints.getContextualHints();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
    });

    it('1볼 1스라이크', () => {
      contextualHints.getContextualHints();
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('1볼 1스트라이크')
      );
    });

    it('2스트라이크', () => {
      contextualHints = new ContextualHints([5, 1, 2], '542');
      contextualHints.getContextualHints();
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('2스트라이크')
      );
    });

    it('3스트라이크', () => {
      contextualHints = new ContextualHints([7, 2, 1], '721');
      contextualHints.getContextualHints();
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('3스트라이크')
      );
    });
  });

  describe('gameEnd 함수 확인', () => {
    const mockQuestions = (answers) => {
      MissionUtils.Console.readLine = jest.fn();
      answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
          callback(input);
        });
      }, MissionUtils.Console.readLine);
    };

    it('플레이어가 올바른 값을 입력했을 때', () => {
      const answers = ['1'];
      mockQuestions(answers);
      expect(() => {
        contextualHints.gameEnd();
      }).toBeTruthy();
    });

    it('플레이어가 올바르지 않은 값을 입력했을 때', () => {
      let answers = ['3'];
      mockQuestions(answers);
      expect(() => {
        contextualHints.gameEnd();
      }).toThrow();

      answers = ['안녕'];
      mockQuestions(answers);
      expect(() => {
        contextualHints.gameEnd();
      }).toThrow();
    });
  });
});
