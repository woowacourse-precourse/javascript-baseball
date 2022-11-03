const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const GameMessage = require('../src/Constants/gameMessage');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('[S1] 유저는 게임이 진행되었는지 한 눈에 딱 알 수 있도록 게임을 시작하면 숫자 야구 게임을 시작합니다. 라는 문구를 보기를 원한다.', () => {
  test('[T1-1] 숫자 야구 게임을 시작합니다. 와 같은 게임 안내 문구를 상수화 하여 정리', () => {
    expect(GameMessage.WELCOME_MESSAGE).toEqual('숫자 야구 게임을 시작합니다.');
    expect(GameMessage.QUESTION_MESSAGE).toEqual('숫자를 입력해주세요. ');
  });
  test('[T1-2] 게임 시작 시 문구 출력 기능', () => {
    const answers = ['1234'];

    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    // 게임 시작 시 숫자야구 게임을 시작합니다. 라는 문구 출력 확인
    const WELCOME_MESSAGE = GameMessage.WELCOME_MESSAGE;
    expect(logSpy).toHaveBeenCalledWith(WELCOME_MESSAGE);
  });
});
