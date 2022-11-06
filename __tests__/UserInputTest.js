const App = require("../src/App");
const app = new App();

describe('사용자 랜덤 숫자 조건 테스트', () => {
    test('숫자는 3자리 자연수', () => {
      const input = '1234';
      const result = app.isValidInputNumbers(input);
      
      expect(result).toBe(false);
    });
  
    test('1부터 9까지의 숫자로 구성', () => {
      const input = '103';
      const result = app.isValidInputNumbers(input);
  
      expect(result).toBe(false);
    });
  
    test('숫자 중복 불허용', () => {
      const input = '112';
      const result = app.isValidInputNumbers(input);
  
      expect(result).toBe(false);
    });
  });