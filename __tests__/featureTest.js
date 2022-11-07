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
    expect(Number.isNaN(Number(app.createComputerNum()))).toBe(false);
  });
  test('1-2, 1-4. 각 숫자가 1~9 범위가 아닌 경우', () => {
    expect(app.createComputerNum().length).toEqual(3);
  });
  test('1-3. 값에 중복된 숫자가 있을 경우', () => {
    const testComputerSet = new Set(app.createComputerNum().split(''));
    expect(testComputerSet.size).toEqual(3);
  });
});

describe('User의 입력값 받기', () => {
  test('사용자의 값 입력 확인', () => {
    const userInput = ['345'];
    const logSpy = getLogSpy();

    mockQuestions(userInput);
    mockRandoms([1, 3, 5]);
    app.getUserInput();
    app.createComputerNum();

    userInput.forEach((input) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(input)),
    );
  });
  test('2-1. 입력된 값이 숫자가 아닌 경우', () => {
    const userInput = ['345'];
    userInput.forEach((input) => expect(Number.isNaN(+input)).toBe(false));
  });
  test('2-2, 2-4. 입력된 값의 각 숫자가 1~9 범위가 아닌 경우', () => {
    const userInput = ['345'];
    userInput.forEach((input) => expect(input.length).toBe(3));
  });
  test('2-3. 입력된 값에 중복된 숫자가 있는 경우', () => {
    const userInput = ['345'];
    const testComputerSet = new Set(...userInput);
    expect(testComputerSet.size).toEqual(3);
  });
  test('2-5. 입력된 값에 공백이 있을 경우', () => {
    const userInput = ['34 5', '2 3 5'];
    userInput.forEach((input) =>
      expect(input.replace(/ /g, '').length).toBe(3),
    );
  });
});

describe('User와 상대방(Computer)의 숫자 비교하기', () => {
  test('strike, ball, nothing 에 해당되는 경우?', () => {
    const userInput = ['345'];
    mockQuestions(userInput);
    mockRandoms([7, 8, 9]);
    app.getUserInput();
    app.createComputerNum();

    expect(app.getAnswer()).toEqual('낫싱');
  });
});
