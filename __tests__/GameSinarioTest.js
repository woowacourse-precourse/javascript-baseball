const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const generateRandomNumberArray = require('../src/utils/game/generateRandomNumber');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

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

describe('숫자 야구 게임 시나리오', () => {
  test('게임 시작 시 게임시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('컴퓨터가 랜덤 숫자를 생성', () => {
    for (let i = 0; i < 100; i += 1) {
      const randomNumberArray = generateRandomNumberArray();
      expect(randomNumberArray.length).toBe(3);
      randomNumberArray.map((randomNumber) => {
        const number = Number(randomNumber);
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(9);
      });
    }
  });

  test('사용자로 부터 1 부터 9 까지 서로 다른 세자리 수를 입력을 받는다.', () => {
    const userInput = ['123'];
    mockQuestions(userInput);

    const app = new App();
    app.play();
    expect(app.numberEnteredByUser()).toBe('123');
  });

  const pickedNumberArrayByComputer = [1, 2, 4];
  const wrongNumberEnteredByUser = [['1234'], ['333'], ['102'], ['3.14'], ['-5'], ['😇']];
  wrongNumberEnteredByUser.forEach((errorInput, index) => {
    test(`예외 테스트${index + 1}`, () => {
      mockRandoms(pickedNumberArrayByComputer);
      mockQuestions(errorInput);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });
  });

  test('게임이 종료되고 재시작 혹은 종료를 선택할 수 있게 하는 기능', () => {
    const pickedNumberArrayByComputer = [1, 2, 3, 4, 5, 6];
    const numberEnteredByUser = ['123', '1', '456', '2'];
    const logSpy = getLogSpy();
    const messages = ['3스트라이크', '게임 종료'];

    mockRandoms(pickedNumberArrayByComputer);
    mockQuestions(numberEnteredByUser);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('재시작 또는 종료의 예외처리', () => {
    const pickedNumberArrayByComputer = [1, 2, 3];
    const numberEnteredByUser = [
      ['123', '0'],
      ['123', '\n'],
      ['123', '*'],
    ];

    numberEnteredByUser.forEach((enteredNumber) => {
      mockRandoms(pickedNumberArrayByComputer);
      mockQuestions(enteredNumber);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });
  });
});
