const handleException = require('../src/components/HandlingException');

describe('예외 처리 테스트', () => {
  test('중복 숫자', () => {
    const answer = '123';
    const playerInput = '111';
    const digit = 3;
    const result = () => {
      handleException(playerInput, digit);
    };

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });

  test('2자리 중복 숫자', () => {
    const answer = '123';
    const playerInput = '113';
    const digit = 3;
    const result = () => handleException(playerInput, digit);

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });

  test('문자 입력', () => {
    const answer = '123';
    const playerInput = '12가';
    const digit = 3;
    const result = () => handleException(playerInput, digit);

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });

  test('0 입력', () => {
    const answer = '123';
    const playerInput = '120';
    const digit = 3;
    const result = () => handleException(playerInput, digit);

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });

  test('자리수 부족', () => {
    const answer = '123';
    const playerInput = '45';
    const digit = 3;
    const result = () => handleException(playerInput, digit);

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });

  test('자리수 과다', () => {
    const answer = '123';
    const playerInput = '4512';
    const digit = 3;
    const result = () => handleException(playerInput, digit);

    expect(result).toThrow('잘못된 입력입니다. 게임을 종료합니다.');
  });
});
