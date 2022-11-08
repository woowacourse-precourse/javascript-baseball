const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const GET_COMPUTER_NUM = require('../src/Baseball/computerNum');

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

describe('기능 테스트', () => {
  test('게임 시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const message = '숫자 야구 게임을 시작합니다.';

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('컴퓨터가 랜덤 값을 생성하는 기능', () => {
    const answers = [1, 7, 9];

    mockRandoms(answers);
    const COMPUTER_NUM = GET_COMPUTER_NUM.getComputerRandomNum();

    expect(COMPUTER_NUM).toEqual(answers);
  });
});
