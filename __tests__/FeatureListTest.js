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

  test('컴퓨터의 3자리 수 생성 테스트', () => {
    const game = new Game();
    const numberArr = game.generateThreeDigitNumber();
    const numberStr = numberArr.join('');
    const numberSet = new Set(numberArr);

    expect(/^[1-9]{3}$/.test(numberStr)).toBe(true);
    expect(numberSet.size).toEqual(3);
  });
});
