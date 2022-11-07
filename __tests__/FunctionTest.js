const MissionUtils = require('@woowacourse/mission-utils');
const {
  validByRegex,
  validDuplicate,
  validInput,
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
    expect(() => {
      validInput('124');
    }).toThrow();
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
