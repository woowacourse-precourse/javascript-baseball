const { ERROR } = require('../src/constants/Constants');
const Validate = require('../src/utils/Validate');

describe('입력값 예외 테스트', () => {
  test.each([' 23', 'a', '!23'])('숫자가 아닌 입력값일 경우', (userNumber) => {
    expect(() => {
      Validate.isNumber(userNumber);
    }).toThrow(ERROR.NAN);
  });

  test('범위 내 숫자가 아닌 경우', () => {
    const USER_NUMBER = Validate.getUserNumberArray('109');
    expect(() => {
      Validate.isRangeNumber(USER_NUMBER);
    }).toThrow(ERROR.RANGE);
  });

  test.each(['118', '1', '12'])(
    '중복되지 않은 숫자 3개가 아닌 경우',
    (userNumber) => {
      const USER_NUMBER = Validate.getUserNumberArray(userNumber);
      expect(() => {
        Validate.isUnique(USER_NUMBER);
      }).toThrow(ERROR.DUPLICATE);
    }
  );

  test.each(['0', ' ', '!', '12'])('지정된 명령키가 아닌 경우', (command) => {
    expect(() => {
      Validate.isCorrect(command);
    }).toThrow(ERROR.COMMAND);
  });
});
