const { isValidNum } = require('../src/modules/isValidNum');
const { compareInputNum } = require('../src/modules/compareInputNum');
const { generateRandomNum } = require('../src/modules/generateRandomNum');

describe("기능 TEST", () => {
  test('사용자 입력 숫자 유효한지 판단하는 기능', () =>  {
    const input = ['234', '1234', '1', 'a', '12', '222', '1.33', '130'];
    const correctAnswer = input.filter((el) => isValidNum(el));

    expect(correctAnswer).toEqual(['234']);
  });
  test('임의의 수와 사용자 입력 수를 비교하여 결과를 출력하는 기능', () =>  {
    const computerNums = '245';
    const inputNum = ['234', '354', '678'];
    const result = inputNum.map((el) => compareInputNum(computerNums, el));

    expect(result).toEqual(['1볼 1스트라이크', '2볼', '낫싱']);
  });
  test('임의의 세 자리수를 만드는 기능', () => {
    const result = generateRandomNum();

    expect(result.length).toEqual(3);
    expect(typeof(result)).toEqual('string');
  });
});