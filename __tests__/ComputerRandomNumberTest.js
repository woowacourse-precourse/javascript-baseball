const App = require("../src/App");
const app = new App();

describe('컴퓨터 랜덤 숫자 조건 테스트', () => {
    test('숫자는 3자리 자연수', () => {
      const input = app.generateComputerRandomNumbers();
      const result = input * 1;
  
      expect(result).toBeGreaterThanOrEqual(100);
      expect(result).toBeLessThanOrEqual(999);
    });
  
    test('1부터 9까지의 숫자로 구성', () => {
      const input = app.generateComputerRandomNumbers();
      const result = input.split('');
  
      expect(result).not.toContain('0');
    });
  
    test('숫자 중복 불허용', () => {
      const input = app.generateComputerRandomNumbers();
      const result = new Set(input);
  
      expect(result.size).toEqual(input.length);
    });
  });