const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getPrintSpy = () => {
  const printSpy = jest.spyOn(MissionUtils.Console, 'print');
  printSpy.mockClear();
  return printSpy;
};

describe('기능 단위 목록별 테스트', () => {
  test('기능1 게임시작 알림 테스트 (showStartMessage 메소드)', () => {
    const printSpy = getPrintSpy();
    const app = new App();

    app.showStartMessage();
    expect(printSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('기능2 랜덤 숫자 생성 테스트 (setRandomDigit 메소드)', () => {
    const randoms = [1, 5, 5, 5, 8, 9];
    mockRandoms(randoms);

    const app = new App();
    expect(app.setRandomDigit()).toEqual([1, 5, 8]);
  });
});
