const { getComputerNumber } = require('../src/utils/getComputerNumber');
const { Console } = require('@woowacourse/mission-utils');

describe('컴퓨터 숫자 랜덤 생성 테스트', () => {
  test('1~9로 이루어진 3자리 숫자인지 검증', () => {
    const computerNumber = getComputerNumber();

    expect(String(computerNumber)).toMatch(/^[1-9]{3}$/);
  });

  test('중복 숫자가 없는지 검증', () => {
    const computerNumber = getComputerNumber();
    const computerArray = String(computerNumber).split('');
    const set = new Set(computerArray);

    expect([...set]).toHaveLength(3);
  });
});

afterAll((done) => {
  Console.close();
  done();
});
