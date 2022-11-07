const App = require('../src/App');
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

describe('[S3]유저는 잘못된 정보를 입력할 경우 버그로 인해 올바르지 못한 게임을 하는 것을 원치 않는다.', () => {
  test('[T3-1] 유저가 1부터 9까지 서로 다른 세자리수 외에 수를 입력한걸 검증하는 기능', () => {
    const testAnswer = [1, 3, 5];
    const testErrorInput = [['12'], ['12.123'], ['-500']];

    testErrorInput.map((errorInput) =>
      expect(() => {
        mockRandoms(testAnswer);
        mockQuestions(errorInput);
        const app = new App();
        app.play();
      }).toThrow()
    );
  });

  test('[T3-2] 게임 종료 기능', () => {
    const randoms = [1, 3, 6];
    const answers = ['136', '2'];
    const logSpy = getLogSpy();
    const messages = ['3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
