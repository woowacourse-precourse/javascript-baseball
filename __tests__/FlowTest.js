const { Console, Random } = require('@woowacourse/mission-utils');
const Game = require('../src/game');
const App = require('../src/App');
const { getComputerNumber } = require('../src/logic');
const { gameStartMessage, resultMessage } = require('../src/message');
const { validateRestartInput } = require('../src/validation');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getReadLineLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'readLine');
  logSpy.mockClear();
  return logSpy;
};

/*
 * 게임 실행 흐름 테스트
 */

describe('게임 시작', () => {
  const logSpy = getLogSpy();

  it('컴퓨터의 수 생성', () => {
    const computerNumber = getComputerNumber();

    // 3자리의 수인가?
    expect(computerNumber).toHaveLength(3);

    // 1에서 9사이의 숫자인가?
    computerNumber.forEach((digit) => {
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });

    // 각 자릿 수가 각각 서로 다른 수인가?
    expect(computerNumber).toHaveLength(new Set(computerNumber).size);
  });

  it('시작을 알리는 텍스트', () => {
    const text = `숫자 야구 게임을 시작합니다.`;
    gameStartMessage();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
  });
});

describe('게임 반복', () => {
  const readLinelogSpy = getReadLineLogSpy();
  const app = new App();
  app.play();

  describe('입력이 유효하지 않은 경우 예외처리', () => {
    it('3자리의 수가 아닌 경우', () => {
      const input = ['1234'];

      mockQuestions(input);

      expect(() => {
        app.play();
      }).toThrow();
    });

    it('각 자릿수가 1에서 9사이의 숫자가 아닌 경우', () => {
      const input = ['012'];

      mockQuestions(input);

      expect(() => {
        app.play();
      }).toThrow();
    });

    it('각 자릿수가 각각 서로 다른 숫자가 아닌 경우', () => {
      const input = ['112'];

      mockQuestions(input);

      expect(() => {
        app.play();
      }).toThrow();
    });
  });

  it('입력한 숫자에 대한 결과 출력', () => {
    const logSpy = getLogSpy();
    const ballAndStrikeCounts = [
      [1, 1],
      [1, 0],
      [0, 1],
      [0, 0],
    ];
    const messages = ['1볼 1스트라이크', '1볼', '1스트라이크', '낫싱'];

    ballAndStrikeCounts.forEach((ballAndStrikeCount) => resultMessage(ballAndStrikeCount));

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  describe('재시작 입력이 유효하지 않은 경우 예외처리', () => {
    it('1과 2 중 하나의 수가 아닌 경우', () => {
      const inputs = ['a', ' ', '1 ', '2 ', 3, 11];

      inputs.forEach((input) =>
        expect(() => {
          validateRestartInput(input);
        }).toThrow()
      );
    });
  });

  describe('분기', () => {
    it('1: 게임 처음부터 다시 시작', () => {
      const randoms = [1, 3, 5, 5, 8, 9];
      const answers = ['135', '1', '125'];
      const logSpy = getLogSpy();
      const messages = ['3스트라이크', '게임 종료', '1볼'];

      mockRandoms(randoms);
      mockQuestions(answers);

      app.play();

      messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    it('2: 게임 종료', () => {
      const randoms = [1, 3, 5, 5, 8, 9];
      const answers = ['135', '2'];
      const logSpy = getLogSpy();
      const messages = ['3스트라이크', '게임이 종료됩니다.'];

      mockRandoms(randoms);
      mockQuestions(answers);

      app.play();

      messages.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });
});
