const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const getRandomNumbers = require('../src/utils/generate-random-number');
const { restartEndGameAnswerValidator, guessAnswerValidate } = require('../src/utils/validation');

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

describe('기능테스트', () => {
  test('중복없는 3자리 숫자 생성', () => {
    const exceptNumbers = new Set(getRandomNumbers());
    expect(exceptNumbers.size).toEqual(3);
  });

  test('숫자 비교 기능 테스트', () => {
    const randoms = [4, 6, 7];
    mockRandoms(randoms);
    const app = new App();
    app.play();
    expect(app.outputResult('456')).toEqual('1볼 1스트라이크');
    expect(app.outputResult('356')).toEqual('1볼');
    expect(app.outputResult('459')).toEqual('1스트라이크');
    expect(app.outputResult('123')).toEqual('낫싱');
    expect(app.outputResult('467')).toEqual(
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
    );
  });
});

describe('예외 테스트', () => {
  test('0이 들어간 입력시 에러', () => {
    const randoms = [4, 6, 7];
    const answers = ['102', '103'];
    mockRandoms(randoms);
    mockAnswer(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('1~9숫자가 아닐 때 에러', () => {
    const randoms = [4, 6, 7];
    const answers = ['10q'];
    mockRandoms(randoms);
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

  test('restartEndGameAnswerValidator 예외 처리 테스트', () => {
    const numbers = ['12', '3', 'q', 1];
    numbers.forEach((number) => {
      expect(() => restartEndGameAnswerValidator(number)).toThrow();
    });
  });
  test('guessAnswerValidate 예외 처리 테스트', () => {
    const numbers = ['12', 'q23', '000', 1];
    numbers.forEach((number) => {
      expect(() => guessAnswerValidate(number)).toThrow();
    });
  });
});
