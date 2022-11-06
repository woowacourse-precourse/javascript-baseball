const NumberBaseballModel = require('../src/model/number-baseball.model');

describe('각 자리수가 다른 3자리 난수 생성', () => {
  test('1~9까지 서로 다른 3자리 난수 생성', async () => {
    const numberBaseball = new NumberBaseballModel();
    const { computer: computerNums } = await numberBaseball.generateNum();
    const result = numberBaseball.inputValidCheck(computerNums);
    expect(result).toEqual(true);
  });
});
