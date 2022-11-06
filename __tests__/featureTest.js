const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const app = new App();

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('상대방(Computer)의 숫자 테스트', () => {
  test('1-1. 숫자가 아닌 경우', () => {
    app
      .createComputerNum()
      .forEach((num) => expect(Number.isNaN(+num)).toBe(false));
  });
  test('1-2. 각 숫자가 1~9 범위가 아닌 경우', () => {
    app
      .createComputerNum()
      .forEach((num) => expect(num >= 1 && num <= 9).toBe(true));
  });
  test('1-3. 값에 중복된 숫자가 있을 경우', () => {
    const testComputerSet = new Set(app.createComputerNum());
    expect(testComputerSet.size).toEqual(3);
  });
  test('1-4. 길이가 3이 아닌 경우', () => {
    expect(app.createComputerNum().length).toEqual(3);
  });
});

describe('User의 입력값 받기', () => {
  test('사용자의 값 입력 확인', () => {
    const userInput = ['345'];
    const logSpy = getLogSpy();

    mockQuestions(userInput);

    app.getUserInput();
    userInput.forEach((input) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(input)),
    );
  });
  test('2-1. 입력된 값이 숫자가 아닌 경우', () => {
    const userInput = ['345', '45d'];
    userInput.forEach((input) => expect(Number.isNaN(+input)).toBe(false));
  });
});
