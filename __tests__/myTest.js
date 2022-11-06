const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockAnswer = (numbers) => {
  MissionUtils.Console.readLine = jest.fn();
  numbers.reduce((mock, number) => {
    return mock.mockImplementationOnce((question, callback) => {
      callback(number);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((mock, number) => {
    return mock.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('숫자생성', () => {
  test('랜덤수 생성', () => {
    const app = new App();
    const Numbers = app.getRandomNumbers();
    const exceptNumbers = new Set(Numbers);
    expect(exceptNumbers.size).toEqual(3);
  });

  test('정답 입력 값 예외 테스트', () => {
    const answers = ['102', '223', 'q23', '12', '1 2'];
    mockAnswer(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('재시작 게임 입력 값 1,2가 아니라면 에러', () => {
    const randoms = [4, 6, 7, 6, 7, 8];
    const answers = ['467', '0'];
    mockRandoms(randoms);
    mockAnswer(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('재시작 입력 validate 예외 처리 테스트', () => {
    const numbers = ['12', '3', 'q', 1];
    const app = new App();
    numbers.forEach((number) => {
      expect(() => app.restartEndGameAnswerValidator(number)).toThrow();
    });
  });

  test('숫자 비교 기능 테스트', () => {
    const randoms = [4, 6, 7];
    mockRandoms(randoms);
    const app = new App();
    app.play();
    expect(app.outputResult('456')).toContain('볼');
    expect(app.outputResult('123')).toContain('낫싱');
    expect(app.outputResult('467')).toContain('3스트라이크');
  });
});
