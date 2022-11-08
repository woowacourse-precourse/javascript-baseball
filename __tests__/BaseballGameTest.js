const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

test('게임 종료 후 재시작', () => {
  const randoms = [2, 3, 4];
  const answers = ['578', '231', '342', '324'];
  const logSpy = getLogSpy();
  const messages = [
    '낫싱',
    '2스트라이크',
    '3볼',
    '2볼 1스트라이크',
  ];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();

  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
