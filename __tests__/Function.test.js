const MissionUtils = require('@woowacourse/mission-utils');
const Function = require('../src/Function');
const {
  validByRegex,
  validDuplicate,
  validOneOrTwo,
  endApp,
} = require('../src/Function');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Function 테스트', () => {
  test('validByRegex 테스트', () => {
    const input = ['123', '890', '678', '1234'];
    const answer = [false, true, false, true];

    const message = input.map(el => validByRegex(el));
    expect(message).toStrictEqual(answer);
  });

  test('validDuplicate 테스트', () => {
    const input = ['112', '123', '222'];
    const answer = [true, false, true];

    const message = input.map(el => validDuplicate(el));
    expect(message).toStrictEqual(answer);
  });

  test('validInput 테스트', () => {
    const input = ['123', '890', '678', '1234', '112', '123', '222'];
    const answer = [true, false, true, false, false, true, false];

    const message = input.map(el => Function.validInput(el));
    expect(message).toStrictEqual(answer);
  });

  test('validOneOrTwo 테스트', () => {
    expect(() => {
      validOneOrTwo('3');
    }).toThrow();
  });

  test('endApp 테스트', () => {
    const logSpy = getLogSpy();
    endApp();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
  });
});
