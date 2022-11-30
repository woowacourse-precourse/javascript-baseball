const BaseballGameController = require('../src/BaseballGameController');

describe('숫자 야구 게임 제어 테스트', () => {
  test('재시작 테스트', () => {
    const RESULT = BaseballGameController.checkCommandResult('1');
    expect(RESULT).toBeTruthy();
  });

  test('게임 종료 테스트', () => {
    const RESULT = BaseballGameController.checkCommandResult('2');
    expect(RESULT).toBeFalsy();
  });
});
