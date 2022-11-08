/* eslint-disable */
const checkInvalidRandomNumber = require('../src/utils/checkInvalidRandomNumber');

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
  