const checkUserInputValid = require('../src/utils/validation');
const { scoreUserInput } = require('../src/utils/computer');

describe('단위 테스트', () => {
  test('점수 계산 테스트', () => {
    expect(scoreUserInput([3, 4, 5], [3, 4, 5])).toEqual({
      ball: 0,
      strike: 3,
    });
    expect(scoreUserInput([3, 4, 5], [3, 5, 4])).toEqual({
      ball: 2,
      strike: 1,
    });
    expect(scoreUserInput([3, 4, 5], [2, 6, 7])).toEqual({
      ball: 0,
      strike: 0,
    });
    expect(scoreUserInput([3, 4, 5], [4, 6, 7])).toEqual({
      ball: 1,
      strike: 0,
    });
  });

  test('사용자 입력 유효성 테스트', () => {
    expect(() => checkUserInputValid()).toThrow('입력 값이 없음');
    expect(() => checkUserInputValid([1, 0, 0])).toThrow('0이 포함됨');
    expect(() => checkUserInputValid([-1, 2, 3])).toThrow('자연수가 아님');
    expect(() => checkUserInputValid([1, 2, 3, 4])).toThrow(
      '세 자리 수가 아님'
    );
    expect(() => checkUserInputValid([1, 1, 1])).toThrow('서로 다른 수가 아님');
  });
});
