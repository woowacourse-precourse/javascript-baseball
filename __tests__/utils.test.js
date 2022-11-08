const {
  makeHintString,
  parseInputToNumberArray,
  isValidNumber,
} = require('../src/lib/utils');

describe('입력을 쪼개어 숫자로 바꾼 배열을 반환하는지 테스트', () => {
  test('입력의 앞 뒤 공백은 제거한 후 숫자로 변환한 배열을 반환한다.', () => {
    expect(parseInputToNumberArray('352 ')).toEqual([3, 5, 2]);
    expect(parseInputToNumberArray(' 352')).toEqual([3, 5, 2]);
    expect(parseInputToNumberArray(' 352 ')).toEqual([3, 5, 2]);
    expect(parseInputToNumberArray(' 123  ')).toEqual([1, 2, 3]);
    expect(parseInputToNumberArray('  123 ')).toEqual([1, 2, 3]);
    expect(parseInputToNumberArray('  123  ')).toEqual([1, 2, 3]);
  });

  test('입력에 문자가 있는 경우 NaN으로 변환한 배열을 반환한다.', () => {
    expect(parseInputToNumberArray('b')).toEqual([NaN]);
    expect(parseInputToNumberArray('b3')).toEqual([NaN, 3]);
    expect(parseInputToNumberArray('bb')).toEqual([NaN, NaN]);
    expect(parseInputToNumberArray('_24')).toEqual([NaN, 2, 4]);
    expect(parseInputToNumberArray('1_3')).toEqual([1, NaN, 3]);
    expect(parseInputToNumberArray('35f')).toEqual([3, 5, NaN]);
    expect(parseInputToNumberArray('12ㄱ')).toEqual([1, 2, NaN]);
    expect(parseInputToNumberArray('ee3')).toEqual([NaN, NaN, 3]);
    expect(parseInputToNumberArray('abc')).toEqual([NaN, NaN, NaN]);
  });

  test('입력 사이에 공백은 0으로 변환한 배열을 반환한다.', () => {
    expect(parseInputToNumberArray('1 34')).toEqual([1, 0, 3, 4]);
    expect(parseInputToNumberArray('1 3')).toEqual([1, 0, 3]);
    expect(parseInputToNumberArray('1  3')).toEqual([1, 0, 0, 3]);
    expect(parseInputToNumberArray('1   3')).toEqual([1, 0, 0, 0, 3]);
  });
});

describe('입력값이 숫자 야구에 유효한 값인지 테스트', () => {
  test('입력에 숫자 이외의 것이 있는 경우 false를 반환한다.', () => {
    expect(isValidNumber([NaN, 1, 1])).toEqual(false);
    expect(isValidNumber([NaN, 2, 3])).toEqual(false);
    expect(isValidNumber([1, NaN, 3])).toEqual(false);
    expect(isValidNumber([1, 6, NaN])).toEqual(false);
  });

  test('입력이 세 자리가 아닌 경우 false를 반환한다.', () => {
    expect(isValidNumber([8])).toEqual(false);
    expect(isValidNumber([2, 3])).toEqual(false);
    expect(isValidNumber([3, 6, 5, 1])).toEqual(false);
    expect(isValidNumber([3, 6, 9, 1, 8])).toEqual(false);
    expect(isValidNumber([1, 9, 8, 2, 3, 4])).toEqual(false);
  });

  test('입력에 0이 포함된 경우 false를 반환한다.', () => {
    expect(isValidNumber([0, 5, 2])).toEqual(false);
    expect(isValidNumber([1, 0, 6])).toEqual(false);
    expect(isValidNumber([3, 4, 0])).toEqual(false);
  });

  test('입력에 중복되는 숫자가 있는 경우 false를 반환한다.', () => {
    expect(isValidNumber([3, 3, 9])).toEqual(false);
    expect(isValidNumber([2, 4, 4])).toEqual(false);
    expect(isValidNumber([6, 2, 6])).toEqual(false);
    expect(isValidNumber([1, 1, 1])).toEqual(false);
  });
});

describe('makeHintString', () => {
  test('볼 0 스 0', () => {
    expect(makeHintString({ numberOfBall: 0, numberOfStrike: 0 })).toEqual(
      '낫싱',
    );
  });

  test('볼 1 스 0', () => {
    expect(makeHintString({ numberOfBall: 1, numberOfStrike: 0 })).toEqual(
      '1볼',
    );
  });

  test('볼 2 스 0', () => {
    expect(makeHintString({ numberOfBall: 2, numberOfStrike: 0 })).toEqual(
      '2볼',
    );
  });

  test('볼 3 스 0', () => {
    expect(makeHintString({ numberOfBall: 3, numberOfStrike: 0 })).toEqual(
      '3볼',
    );
  });

  test('볼 0 스 1', () => {
    expect(makeHintString({ numberOfBall: 0, numberOfStrike: 1 })).toEqual(
      '1스트라이크',
    );
  });

  test('볼 0 스 2', () => {
    expect(makeHintString({ numberOfBall: 0, numberOfStrike: 2 })).toEqual(
      '2스트라이크',
    );
  });

  test('볼 0 스 3', () => {
    expect(makeHintString({ numberOfBall: 0, numberOfStrike: 3 })).toEqual(
      '3스트라이크',
    );
  });

  test('볼 1 스 1', () => {
    expect(makeHintString({ numberOfBall: 1, numberOfStrike: 1 })).toEqual(
      '1볼 1스트라이크',
    );
  });

  test('볼 1 스 2', () => {
    expect(makeHintString({ numberOfBall: 1, numberOfStrike: 2 })).toEqual(
      '1볼 2스트라이크',
    );
  });

  test('볼 2 스 1', () => {
    expect(makeHintString({ numberOfBall: 2, numberOfStrike: 1 })).toEqual(
      '2볼 1스트라이크',
    );
  });
});
