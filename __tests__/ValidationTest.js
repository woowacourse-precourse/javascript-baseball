const App = require('../src/App');
const { Console } = require('@woowacourse/mission-utils');

const inputValidationTest = (palyerInput) => {
  Console.readLine = jest.fn((question, callback) => callback(palyerInput))
  
  const app = new App();
  app.play();
};

describe('유효성 검사 (예외처리)', () => {
  test('입력값 길이 검사', () => {
    expect(() => 
      inputValidationTest('12')
    ).toThrow(new Error('입력값은 세자리 수를 입력해주세요.'));
  });

  test('입력값 중첩값 검사', () => {
    expect(() => inputValidationTest('122')
    ).toThrow(new Error('중첩되지 않는 세자리 수를 입력해주세요.'))
  });

  test('입력값 넘버타입 검사', () => {
    expect(() => 
      inputValidationTest('12f')
    ).toThrow(new Error('숫자만 입력해주세요.'))    
  });
});
