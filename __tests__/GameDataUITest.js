const MissionUtils = require('@woowacourse/mission-utils');
const GameDataUI = require('../src/userInterfaces/GameDataUI');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((question, callback) => {
      callback(input);
    }),
    MissionUtils.Console.readLine,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const gameDataUI = new GameDataUI();

describe('3자리 숫자 입력 에러처리 테스트', () => {
  test('4자리수가 입력으로 들어오면', () => {
    const answers = ['1234'];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.newGuess();
    }).toThrow();
  });

  test('2자리수가 입력으로 들어오면', () => {
    const answers = ['12'];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.newGuess();
    }).toThrow();
  });

  test('3자리의 특수문자가 포함된 입력이 들어오면', () => {
    const answers = ['1a2'];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.newGuess();
    }).toThrow();
  });

  test('3자리의 중복있는 입력이 들어오면', () => {
    const answers = ['112'];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.newGuess();
    }).toThrow();
  });
});

describe('게임 종료시 input이 1, 2 가 아닐 때 에러처리', () => {
  test('1, 2가 아닌 입력이 들어오면', () => {
    const answers = ['3'];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.gameOver();
    }).toThrow();
  });

  test('null 이 입력으로 들어오면', () => {
    const answers = [''];

    mockQuestions(answers);

    expect(() => {
      gameDataUI.gameOver();
    }).toThrow();
  });
});
