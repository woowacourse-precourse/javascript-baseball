const App = require('../src/App');
const Game = require('../src/game/Game');
const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('../src/input/Computer');

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

describe('숫자 야구 게임 시작 테스트', () => {
  test('숫자 야구 게임 시작 출력 테스트', () => {
    const log = getLogSpy();

    const game = new Game();
    game.initPrint();

    expect(log).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('컴퓨터 난수 길이 테스트', () => {
    const computer = new Computer();
    const computerNumbers = computer.getComputerNumbers();
    expect(computerNumbers.length).toEqual(3);
  });

  test('컴퓨터의 숫자가 중복값이 있는지 테스트', () => {
    const computer = new Computer();
    const computerNumbers = computer.getComputerNumbers();
    expect([...new Set(computerNumbers)].length).toEqual(3);
  });

  test('컴퓨터 난수 범위 테스트', () => {
    const computer = new Computer();
    const computerNumbers = computer.getComputerNumbers();
    const testData = computerNumbers.map((item) => {
      if (item >= 1 && item <= 9) {
        return item;
      }
    });
    expect(testData.length).toEqual(3);
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
