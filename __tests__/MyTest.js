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

describe('숫자 야구 게임 My Test', () => {
  test('3자리 숫자 랜덤 숫자 생성', () => {
    const app = new App();
    const randNum1 = app.makeRandomNumber(3);
    const randNum2 = app.makeRandomNumber(3);
    let result = randNum1 === randNum2;

    if (result) {
      const randNum3 = app.makeRandomNumber(3);
      const randNum4 = app.makeRandomNumber(3);
      result = randNum3 === randNum4;

      expect(randNum3).toHaveLength(3);
      expect(randNum4).toHaveLength(3);
    }

    expect(randNum1).toHaveLength(3);
    expect(randNum2).toHaveLength(3);
    expect(result).toBeFalsy();
  });

  test('상대방의 숫자와 사용자가 입력한 숫자 비교', () => {
    const computer = '369';
    const game = new Game(computer);
    const userInputs = ['000', '146', '321', '398', '369'];
    const result = [];

    userInputs.forEach((input) => {
      game.setUserNumber(input);
      result.push(game.compareNumbers());
    });

    expect(result).toEqual([
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 3],
    ]);
  });

  test('숫자 비교 결과를 출력', () => {
    const game = new Game();
    const result = [];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
    ];
    const compareResults = [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
      [0, 3],
    ];

    compareResults.forEach((compareResult) => {
      game.setBall(compareResult[0]);
      game.setStrike(compareResult[1]);
      result.push(game.printCompareResult());
    });

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('사용자의 잘못된 입력시 예외 발생 후 애플리케이션 종료', () => {
    const computer = [3, 6, 9];
    const userInputs = ['324', '23'];

    mockRandoms(computer);
    mockQuestions(userInputs);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('게임을 종료하고 게임 재시작 & 애플리이션 완전 종료', () => {
    const randoms = [3, 6, 9, 5, 8, 9];
    const answers = ['458', '146', '321', '398', '369', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '1스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
