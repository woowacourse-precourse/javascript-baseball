const { getBaseballResultMessage } = require('../src/utils/getBaseballResultMessage');

describe('숫자 야구 결과 출력 테스트', () => {
  const computerNumber = '123';

  test('낫싱', () => {
    const playerNumber = '456';

    expect(getBaseballResultMessage(computerNumber, playerNumber)).toEqual('낫싱');
  });

  test('n볼', () => {
    const playerNumber = '231';

    expect(getBaseballResultMessage(computerNumber, playerNumber)).toEqual('3볼');
  });

  test('n스트라이크', () => {
    const playerNumber = '123';

    expect(getBaseballResultMessage(computerNumber, playerNumber)).toEqual('3스트라이크');
  });

  test('n볼 n스트라이크', () => {
    const playerNumber = '321';

    expect(getBaseballResultMessage(computerNumber, playerNumber)).toEqual('2볼 1스트라이크');
  });
});
