const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('../src/Constants/gameMessage');

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

describe('[S4] 유저는 게임이 끝난 후 다시 게임을 하거나 종료할 수 있도록 1을 입력하면 재시작, 2를 입력하면 종료가 되기를 원한다.', () => {
  test('[T4-1] 게임이 종료되고 재시작 혹은 종료를 선택할 수 있게 하는 기능', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ['123', '1', '456', '2'];
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
