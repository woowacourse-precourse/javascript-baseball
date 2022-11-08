const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BaseballGame = require('../src/BaseballGame');
const Messages = require('../src/constants/Messages');

/** 사용자 입력값 제어 */
const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

// 테스트 구문
describe('컴퓨터와 비교할 사용자 공 입력값 테스트', () => {
  test('알파벳 3자리 입력할 경우', () => {
    mockQuestions(['abc']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });

  test('알파벳 3자리 초과 입력할 경우', () => {
    mockQuestions(['alphabet input']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });

  test('숫자 3자리 초과 입력할 경우', () => {
    mockQuestions(['18439']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });

  test('3자리 숫자 중 중복된 숫자가 있을 경우', () => {
    mockQuestions(['188']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });

  test('소수가 입력될 경우', () => {
    mockQuestions(['3.45']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });

  test('0이 포함된 숫자가 입력될 경우', () => {
    mockQuestions(['802']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.getUserInput();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_BALL_NUMBER);
    }
  });
});

describe('종료 후 게임 진행 사용자 입력값 테스트', () => {
  test('1, 2 선택지 외의 숫자를 입력할 경우', () => {
    mockQuestions(['11']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.chooseResetOrExit();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_SELECT_NUMBER);
    }
  });

  test('1, 2 선택지 외의 문자를 입력할 경우', () => {
    mockQuestions(['alphabet test']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.chooseResetOrExit();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_SELECT_NUMBER);
    }
  });

  test('1, 2 선택지 외의 소수를 입력할 경우', () => {
    mockQuestions(['5.2']);
    const baseballGame = new BaseballGame();

    try {
      baseballGame.chooseResetOrExit();
    } catch (error) {
      expect(error.message).toBe(Messages.ERROR.INVALID_SELECT_NUMBER);
    }
  });
});
