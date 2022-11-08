const MissionUtils = require('@woowacourse/mission-utils');
const Dispatcher = require('../src/Dispatcher');
const GameDataUI = require('../src/userInterfaces/GameDataUI');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((question, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('UI - Dispatcher 의존성 주입 및 Action 테스트', () => {
  test('UserInterface 가 Dispatcher에게 정상적으로 Action을 보내는지 테스트', () => {
    const dispatcher = new Dispatcher();
    const gameDataUI = new GameDataUI();
    const logSpy = getLogSpy();
    const answers = ['1'];

    mockQuestions(answers);

    gameDataUI.injection(dispatcher);

    dispatcher.register((action) => {
      if (action.type === 'game-restart') {
        MissionUtils.Console.print('테스트성공');
      }
    });

    gameDataUI.gameOver();

    expect(logSpy).toHaveBeenCalledWith('테스트성공');
  });
});
