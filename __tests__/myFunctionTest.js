const App = require('../src/App');
const Game = require('../src/game/Game');
const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('../src/input/Computer');
const User = require('../src/input/User');
const constants = require('../src/constants/constants');

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

  test('사용자의 입력값의 길이 테스트', () => {
    const user = new User();
    const userTestNumberArray = [
      [1],
      [1, 2],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6],
    ];
    userTestNumberArray.forEach((item) => {
      expect(() => user.checkUserNumber(item)).toThrow(
        `입력할 수 있는 길이는 ${constants.INPUT_SIZE}입니다. 종료합니다.`
      );
    });
  });

  test('사용자의 입력값 중복 테스트', () => {
    const user = new User();
    const userTestNumberArray = [
      [1, 1, 2],
      [3, 1, 3],
      [9, 9, 1],
      [5, 5, 5],
      [2, 8, 8],
    ];
    userTestNumberArray.forEach((item) => {
      expect(() => user.checkUserNumber(item)).toThrow(
        '중복되었습니다. 종료합니다.'
      );
    });
  });

  test('사용자의 입력값 범위 테스트', () => {
    const user = new User();
    const userTestNumberArray = [
      [1, 0, 3],
      [0, 1, 2],
      [0, 1, 8],
    ];
    userTestNumberArray.forEach((item) => {
      expect(() => user.checkUserNumber(item)).toThrow(
        `${constants.MIN_INPUT_NUMBER}~${constants.MAX_INPUT_NUMBER} 범위만 입력 가능합니다. 종료합니다.`
      );
    });
  });

  test('사용자의 입력값 숫자 테스트', () => {
    const user = new User();
    const userTestArray = ['a12', 'abc', '17D'];
    const userTestNumberArray = userTestArray.map((item) =>
      user.makeNumberArray(item)
    );

    userTestNumberArray.forEach((item) => {
      expect(() => user.checkUserNumber(item)).toThrow(
        '숫자만 입력 가능합니다. 종료합니다.'
      );
    });
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
