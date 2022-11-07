const createRandomNumbers = require('../src/utils/createRandomNumbers');
const { countBallAndStrike, getBallAndStrikeMessage } = require('../src/utils/baseball');
const { MESSAGE, NUMBERS_RULES } = require('../src/static/constants');

describe("숫자 야구 게임", () => {
  test("랜덤 숫자 생성", () => {
    const numbers = createRandomNumbers();
    const set = new Set(numbers);
    
    expect(set).toHaveProperty('size', NUMBERS_RULES.digit);
    expect(numbers).toEqual(expect.arrayContaining(numbers));
  });
  test("스트라이크, 볼 개수 count", () => {
    const inputs = [
      {computerNumbers: [1,2,3], playerNumbers: [1,2,3]},
      {computerNumbers: [1,2,3], playerNumbers: [4,5,6]},
      {computerNumbers: [1,2,3], playerNumbers: [1,4,5]},
      {computerNumbers: [1,2,3], playerNumbers: [4,5,1]}
    ]
    const results = inputs.map(countBallAndStrike);
    const counts = [
      {ball: 0, strike: 3},
      {ball: 0, strike: 0},
      {ball: 0, strike: 1},
      {ball: 1, strike: 0}
    ];

    results.forEach((result, index) => {
      expect(result).toEqual(counts[index]);
    })
  });
  test("스트라이크, 볼 메시지 출력", () => {
    const inputs = [
      {ball: 0, strike: 0},
      {ball: 1, strike: 1},
      {ball: 2, strike: 0},
      {ball: 0, strike: 2},
      {ball: 0, strike: 3}
    ]
    const results = inputs.map(getBallAndStrikeMessage);
    const messages = [
      MESSAGE.resultNoting,
      `1${MESSAGE.resultBall} 1${MESSAGE.resultStrike}`,
      `2${MESSAGE.resultBall}`,
      `2${MESSAGE.resultStrike}`,
      `3${MESSAGE.resultStrike}`
    ];

    results.forEach((result, index) => {
      expect(result).toEqual(messages[index]);
    })
  });
});