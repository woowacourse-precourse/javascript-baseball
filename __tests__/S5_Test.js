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

test('[S5] 유저는 원할한 게임을 진행할 수 있도록 게임 규칙에 의거하여 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시 받고 싶어한다.', () => {
  const randoms = [1, 2, 3, 5, 8, 9];
  const answers = ['789', '123', '1', '597', '589', '2'];
  const logSpy = getLogSpy();
  const messages = [
    '낫싱',
    '3스트라이크',
    '1볼 1스트라이크',
    '3스트라이크',
    '게임 종료',
  ];

  mockRandoms(randoms);
  mockQuestions(answers);

  const app = new App();
  app.play();

  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
