const App = require('../src/App');
const app = new App();
const MissionUtils = require('@woowacourse/mission-utils');

const { Errors, Constants } = require('../src/Constants');
const { INPUT_STRING } = Constants;
const {
  ERR_INPUT_UNDEFINED,
  ERR_3_NUM_NEEDED,
  ERR_NUM_DUPLICATED,
  ERR_ONLY_NUMBER,
  ERR_OPT_1_CHAR_NEEDED,
  ERR_OPT_ANSWER_NEEDED,
} = Errors;

const makeAndCheckAnswer = () => {
  app.initAnswer();
  const answer = app.getAnswer();
  const charSet = new Set();
  answer.split('').forEach((char) => INPUT_STRING.includes(char) && charSet.add(char));
  if (charSet.size !== 3) return false;
  return true;
};

describe('<정답값 난수 생성 확인>', () => {
  test('난수 100회 생성 및 검증', () => {
    let expected = true;
    for (let i = 0; i < 100; i++) {
      expected = makeAndCheckAnswer();
    }
    expect(expected).toEqual(true);
  });
});

describe('<스트라이크 볼 판정>', () => {
  test('1) 456 -> 123 : [0,0]', () => {
    const userInput = '123';
    const answer = '456';
    const result = app.countBallStrike(answer, userInput);
    const expected = [0, 0];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });
  test('2) 412 -> 153 : [1,0]', () => {
    const userInput = '153';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [1, 0];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('3) 412 -> 123 : [2,0]', () => {
    const userInput = '123';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [2, 0];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('4) 412 -> 124 : [3,0]', () => {
    const userInput = '124';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [3, 0];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('5) 412 -> 436 : [0,1]', () => {
    const userInput = '436';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [0, 1];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('6) 412 -> 416 : [0,2]', () => {
    const userInput = '416';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [0, 2];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('7) 412 -> 412 : [0,3]', () => {
    const userInput = '412';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [0, 3];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('8) 412 -> 481 : [1,1]', () => {
    const userInput = '481';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [1, 1];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test('9) 412 -> 421 : [2,1]', () => {
    const userInput = '421';
    const answer = '412';
    const result = app.countBallStrike(answer, userInput);
    const expected = [2, 1];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  MissionUtils.Console.close();
});

describe('<정답 입력 검증>', () => {
  test('1) 123 : not throw', () => {
    const userInput = '123';
    const answer = '123';
    const result = app.countBallStrike(answer, userInput);
    const expected = [0, 3];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expected);
  });

  test(`1) undefined : ${ERR_INPUT_UNDEFINED}`, () => {
    let userInput;
    const answer = '123';

    expect(() => {
      app.countBallStrike(answer, userInput);
    }).toThrow(ERR_INPUT_UNDEFINED);
  });

  test(`2) 12 : ${ERR_3_NUM_NEEDED}`, () => {
    let userInput = '12';
    const answer = '123';

    expect(() => {
      app.countBallStrike(answer, userInput);
    }).toThrow(ERR_3_NUM_NEEDED);
  });

  test(`3) 122 : ERR_NUM_DUPLICATED`, () => {
    let userInput = '122';
    const answer = '123';

    expect(() => {
      app.countBallStrike(answer, userInput);
    }).toThrow(ERR_NUM_DUPLICATED);
  });

  test(`4) 120 : ${ERR_ONLY_NUMBER}`, () => {
    let userInput = '120';
    const answer = '123';

    expect(() => {
      app.countBallStrike(answer, userInput);
    }).toThrow(ERR_ONLY_NUMBER);
  });
});
describe('<다음판 여부 입력 검증>', () => {
  test(`1) 1 : not throw`, () => {
    let userInput = '1';
    expect(app.checkOptionValid(userInput)).toEqual(true);
  });

  test(`2) undefined : ${ERR_INPUT_UNDEFINED}`, () => {
    let userInput;
    expect(() => {
      app.checkOptionValid(userInput);
    }).toThrow(ERR_INPUT_UNDEFINED);
  });

  test(`3) 12 : ${ERR_OPT_1_CHAR_NEEDED}`, () => {
    let userInput = '12';
    expect(() => {
      app.checkOptionValid(userInput);
    }).toThrow(ERR_OPT_1_CHAR_NEEDED);
  });

  test(`4) 3 : ${ERR_OPT_ANSWER_NEEDED}`, () => {
    let userInput = '3';
    expect(() => {
      app.checkOptionValid(userInput);
    }).toThrow(ERR_OPT_ANSWER_NEEDED);
  });
});
