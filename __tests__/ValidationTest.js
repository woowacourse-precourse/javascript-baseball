const Validator = require('../src/Validator');

describe('예외처리 테스트', () => {
  test('플레이어가 잘못된 값을 입력했는지 확인하는 테스트', () => {
    const validator = new Validator();
    const goodAnswers = [
      validator.isError('123'),
      validator.isError('456'),
      validator.isError('139'),
      validator.isError('518'),
    ];
    const badAnswers = [
      validator.isError('1234'),
      validator.isError('343'),
      validator.isError('e12'),
      validator.isError('506'),
      validator.isError('699'),
      validator.isError('13'),
    ];

    goodAnswers.forEach((answer) => {
      expect(answer).toBeFalsy();
    });

    badAnswers.forEach((answer) => {
      expect(answer).toBeTruthy();
    });
  });
});
