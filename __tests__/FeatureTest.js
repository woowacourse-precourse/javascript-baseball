const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const GET_COMPUTER_NUM = require('../src/model/computerNum');
const INPUT_CHECK = require('../src/utils/inputCheck');
const GAME_RESULT = require('../src/model/gameResult');

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

  test('입력 값이 3글자인지 확인', () => {
    const input = '123';
    const CHECKED_NUM_LENGTH = INPUT_CHECK.checkNumLength(input);

    expect(CHECKED_NUM_LENGTH).toBeTruthy();
  });

  test('입력 값이 1~9 사이의 숫자인지 확인', () => {
    const [input1, input2, input3] = ['12a', '190', '179']; // input3만 true
    const CHECKED_IS_NUMBER = INPUT_CHECK.checkIsNumber(input3);

    expect(CHECKED_IS_NUMBER).toBeTruthy();
  });

  test('중복되는 값을 입력했는지 확인', () => {
    const [input1, input2] = ['122', '123'];

    expect(INPUT_CHECK.checkNumOverlap(input1)).toBeFalsy();
    expect(INPUT_CHECK.checkNumOverlap(input2)).toBeTruthy();
  });

  test('볼, 스트라이크 갯수 카운트 확인', () => {
    const computerNum = [1, 7, 9];
    const userNum = [1, 9, 8];

    const count = GAME_RESULT.gameCounter(userNum, computerNum);
    const expectedValue = { ball: 1, strike: 1 };

    expect(count).toEqual(expectedValue);
  });
});
