const MissionUtils = require("@woowacourse/mission-utils");
const Console = require('../src/Console');
const { MESSAGE } = require('../src/static/constants');

describe('Console', () => {
  test('print', () => {
    const myConsole = new Console();
    const myConsoleSpy = jest.spyOn(MissionUtils.Console, 'print');
    const messages = ['숫자 야구 게임을 시작합니다.'];
    Object.values(MESSAGE).forEach((message) => {
      myConsole.print(message);
    })

    messages.forEach((output) => {
      expect(myConsoleSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  })
})