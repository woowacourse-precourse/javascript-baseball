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

describe('숫자 야구 게임 사용자 입력값 테스트', () => {
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
});
