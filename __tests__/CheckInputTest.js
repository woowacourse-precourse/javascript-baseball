/* eslint-disable */
const checkInvalidRandomNumber = require('../src/utils/checkInvalidRandomNumber');
const checkValidUserInput = require('../src/utils/checkValidUserInput');
const ERROR_TEXT = require('../src/constant/error');

describe('난수 예외 처리', () => {
    test('중복되는 수가 있는 경우', () => {
      const input = [1, 2, 2];
      const result = checkInvalidRandomNumber(input);
  
      expect(result).toEqual(true);
    });
    test('3자리가 아닌 경우', () => {
      const input = [1, 2, 6, 3];
      const result = checkInvalidRandomNumber(input);
  
      expect(result).toEqual(true);
    });
    test('문자가 섞여있는 경우', () => {
        const input = [1, 2, 'e'];
        const result = checkInvalidRandomNumber(input);
    
        expect(result).toEqual(true);
      });
  });
  
describe('사용자 입력값 예외 처리', () => {
    test('중복되는 수가 있는 경우', () => {
      const input = [1, 2, 2];
  
      expect(() => checkValidUserInput(input)).toThrow(ERROR_TEXT.DUPLICATED);
    });
    test('3자리가 아닌 경우', () => {
      const input = [1, 2, 6, 3];
  
      expect(() => checkValidUserInput(input)).toThrow(ERROR_TEXT.NOTTHREEDIGIT);
    });
    test('문자가 섞여있는 경우', () => {
        const input = [1, 2, 'e'];
    
        expect(() => checkValidUserInput(input)).toThrow(ERROR_TEXT.NOTNUMBER);
      });
    test('0이 들어가 있는 경우', () => {
        const input = [1, 2, 0];
    
        expect(() => checkValidUserInput(input)).toThrow(ERROR_TEXT.INCLUDEZERO);
      });
});